<?php
// ── Zaymix User Data API ─────────────────────────────────
// File: api/userdata.php
// Endpoints: save, load, save_bulk

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);

session_start();
require_once 'db.php';

if (!isset($_SESSION['user_id'])) {
    die(json_encode(['error' => 'Not logged in']));
}
$userId = $_SESSION['user_id'];
$input  = json_decode(file_get_contents('php://input'), true) ?? [];
$action = $input['action'] ?? $_GET['action'] ?? '';
$db     = getDB();

switch ($action) {
    case 'save':
        $key = $input['key'] ?? '';
        $val = json_encode($input['value'] ?? null);
        $stmt = $db->prepare("INSERT INTO user_data (user_id,data_key,data_value) VALUES (?,?,?) ON DUPLICATE KEY UPDATE data_value=VALUES(data_value)");
        $stmt->bind_param('iss', $userId, $key, $val);
        $stmt->execute();
        echo json_encode(['success' => true]);
        break;

    case 'load':
        $key  = $input['key'] ?? $_GET['key'] ?? '';
        $stmt = $db->prepare("SELECT data_value FROM user_data WHERE user_id=? AND data_key=?");
        $stmt->bind_param('is', $userId, $key);
        $stmt->execute();
        $row  = $stmt->get_result()->fetch_assoc();
        echo json_encode(['success' => true, 'value' => $row ? json_decode($row['data_value'], true) : null]);
        break;

    case 'load_all':
        $stmt = $db->prepare("SELECT data_key, data_value FROM user_data WHERE user_id=?");
        $stmt->bind_param('i', $userId);
        $stmt->execute();
        $rows = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        $data = [];
        foreach ($rows as $r) $data[$r['data_key']] = json_decode($r['data_value'], true);
        echo json_encode(['success' => true, 'data' => $data]);
        break;

    case 'save_bulk':
        // Save multiple keys at once
        $items = $input['items'] ?? [];
        $stmt  = $db->prepare("INSERT INTO user_data (user_id,data_key,data_value) VALUES (?,?,?) ON DUPLICATE KEY UPDATE data_value=VALUES(data_value)");
        foreach ($items as $key => $value) {
            $val = json_encode($value);
            $stmt->bind_param('iss', $userId, $key, $val);
            $stmt->execute();
        }
        echo json_encode(['success' => true, 'saved' => count($items)]);
        break;

    default:
        echo json_encode(['error' => 'Unknown action']);
}