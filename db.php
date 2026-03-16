<?php
// ── Zaymix PHP + MySQL Database Backend ──────────────────
// File: api/db.php
// KONFIGURASI — sesuaikan dengan hosting kamu
define('DB_HOST', 'localhost');
define('DB_USER', 'root');         // ganti dengan user MySQL kamu
define('DB_PASS', '');             // ganti dengan password MySQL kamu
define('DB_NAME', 'zaymix_db');    // nama database

function getDB() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        http_response_code(500);
        die(json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]));
    }
    $conn->set_charset('utf8mb4');
    return $conn;
}