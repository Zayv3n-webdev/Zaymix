<?php
// ── Zaymix Auth API ──────────────────────────────────────
// File: api/auth.php
// Endpoints: register, login, logout, get_user

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);

session_start();
require_once 'db.php';

$input = json_decode(file_get_contents('php://input'), true) ?? [];
$action = $input['action'] ?? $_GET['action'] ?? '';

switch ($action) {
    case 'register':
        $username = trim($input['username'] ?? '');
        $email    = trim($input['email'] ?? '');
        $password = $input['password'] ?? '';
        $color    = $input['avatarColor'] ?? '#7c3aed';

        if (strlen($username) < 3) die(json_encode(['error' => 'Username minimal 3 karakter']));
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) die(json_encode(['error' => 'Email tidak valid']));
        if (strlen($password) < 6) die(json_encode(['error' => 'Password minimal 6 karakter']));

        $db = getDB();
        $check = $db->prepare("SELECT id FROM users WHERE username=? OR email=?");
        $check->bind_param('ss', $username, $email);
        $check->execute();
        if ($check->get_result()->num_rows > 0) die(json_encode(['error' => 'Username atau email sudah digunakan']));

        $hash = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $db->prepare("INSERT INTO users (username,email,password,avatar_color) VALUES (?,?,?,?)");
        $stmt->bind_param('ssss', $username, $email, $hash, $color);
        $stmt->execute();
        $userId = $db->insert_id;

        $_SESSION['user_id'] = $userId;
        $_SESSION['username'] = $username;
        echo json_encode(['success' => true, 'user' => getUserById($db, $userId)]);
        break;

    case 'login':
        $username = trim($input['username'] ?? '');
        $password = $input['password'] ?? '';

        $db = getDB();
        $stmt = $db->prepare("SELECT * FROM users WHERE username=? OR email=?");
        $stmt->bind_param('ss', $username, $username);
        $stmt->execute();
        $user = $stmt->get_result()->fetch_assoc();

        if (!$user || !password_verify($password, $user['password'])) {
            die(json_encode(['error' => 'Username atau password salah']));
        }
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        echo json_encode(['success' => true, 'user' => formatUser($user)]);
        break;

    case 'logout':
        session_destroy();
        echo json_encode(['success' => true]);
        break;

    case 'get_user':
        if (!isset($_SESSION['user_id'])) die(json_encode(['error' => 'Not logged in']));
        $db = getDB();
        echo json_encode(['success' => true, 'user' => getUserById($db, $_SESSION['user_id'])]);
        break;

    case 'update_profile':
        if (!isset($_SESSION['user_id'])) die(json_encode(['error' => 'Not logged in']));
        $db = getDB();
        $fields = []; $params = []; $types = '';
        if (isset($input['avatarColor'])) { $fields[] = 'avatar_color=?'; $params[] = $input['avatarColor']; $types .= 's'; }
        if (isset($input['profilePic']))  { $fields[] = 'profile_pic=?';  $params[] = $input['profilePic'];  $types .= 's'; }
        if (isset($input['borderStyle'])) { $fields[] = 'border_style=?'; $params[] = $input['borderStyle']; $types .= 's'; }
        if (isset($input['borderColor'])) { $fields[] = 'border_color=?'; $params[] = $input['borderColor']; $types .= 's'; }
        if (empty($fields)) die(json_encode(['error' => 'No fields to update']));
        $params[] = $_SESSION['user_id']; $types .= 'i';
        $stmt = $db->prepare("UPDATE users SET " . implode(',', $fields) . " WHERE id=?");
        $stmt->bind_param($types, ...$params);
        $stmt->execute();
        echo json_encode(['success' => true, 'user' => getUserById($db, $_SESSION['user_id'])]);
        break;

    default:
        echo json_encode(['error' => 'Unknown action']);
}

function getUserById($db, $id) {
    $stmt = $db->prepare("SELECT * FROM users WHERE id=?");
    $stmt->bind_param('i', $id);
    $stmt->execute();
    return formatUser($stmt->get_result()->fetch_assoc());
}
function formatUser($u) {
    if (!$u) return null;
    unset($u['password']);
    return $u;
}
