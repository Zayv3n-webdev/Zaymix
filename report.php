<?php
// ── Zaymix Report / Request API ──────────────────────────
// File: api/report.php
// Handles: bug reports, song requests (+ Formspree forwarding)

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit(0);

session_start();
require_once 'db.php';

$input  = json_decode(file_get_contents('php://input'), true) ?? [];
$action = $input['action'] ?? '';
$db     = getDB();
$userId = $_SESSION['user_id'] ?? null;

switch ($action) {
    case 'bug_report':
        $type   = $input['type']   ?? 'bug';
        $title  = $input['title']  ?? '';
        $detail = $input['detail'] ?? '';
        $name   = $input['name']   ?? null;
        if (!$title || !$detail) die(json_encode(['error' => 'Judul dan detail wajib diisi']));

        // Save to DB
        $stmt = $db->prepare("INSERT INTO bug_reports (user_id,type,title,detail,name) VALUES (?,?,?,?,?)");
        $stmt->bind_param('issss', $userId, $type, $title, $detail, $name);
        $stmt->execute();

        // Also forward to Formspree
        forwardToFormspree([
            'Jenis'  => $type,
            'Judul'  => $title,
            'Detail' => $detail,
            'Nama'   => $name ?? 'Anonim',
            '_subject' => "[Zaymix " . strtoupper($type) . "] $title"
        ]);

        echo json_encode(['success' => true]);
        break;

    case 'song_request':
        $title  = $input['title']  ?? '';
        $artist = $input['artist'] ?? '';
        $genre  = $input['genre']  ?? null;
        $link   = $input['link']   ?? null;
        $note   = $input['note']   ?? null;
        if (!$title || !$artist) die(json_encode(['error' => 'Judul dan artis wajib diisi']));

        // Save to DB
        $stmt = $db->prepare("INSERT INTO song_requests (user_id,title,artist,genre,link,note) VALUES (?,?,?,?,?,?)");
        $stmt->bind_param('isssss', $userId, $title, $artist, $genre, $link, $note);
        $stmt->execute();

        // Also forward to Formspree
        forwardToFormspree([
            'Judul Lagu' => $title,
            'Artis'      => $artist,
            'Genre'      => $genre ?? '—',
            'Link'       => $link  ?? '—',
            'Pesan'      => $note  ?? '—',
        ]);

        echo json_encode(['success' => true]);
        break;

    default:
        echo json_encode(['error' => 'Unknown action']);
}

function forwardToFormspree(array $data) {
    $ch = curl_init('https://formspree.io/f/mgvlwopd');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json'],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 5,
    ]);
    curl_exec($ch);
    curl_close($ch);
}
