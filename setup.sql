-- ── Zaymix Database Setup Script ────────────────────────
-- Jalankan di phpMyAdmin atau MySQL CLI:
-- mysql -u root -p < setup.sql

CREATE DATABASE IF NOT EXISTS zaymix_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE zaymix_db;

-- Tabel users
CREATE TABLE IF NOT EXISTS users (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    username    VARCHAR(50) UNIQUE NOT NULL,
    email       VARCHAR(100) UNIQUE NOT NULL,
    password    VARCHAR(255) NOT NULL,
    avatar_color VARCHAR(20) DEFAULT '#7c3aed',
    profile_pic LONGTEXT DEFAULT NULL,
    border_style VARCHAR(50) DEFAULT 'ring-pulse',
    border_color VARCHAR(20) DEFAULT '#b76cff',
    role        ENUM('member','premium','admin') DEFAULT 'member',
    join_date   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_seen   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel user data (favorites, stats, dll per user)
CREATE TABLE IF NOT EXISTS user_data (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    user_id     INT NOT NULL,
    data_key    VARCHAR(50) NOT NULL,
    data_value  LONGTEXT NOT NULL,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_key (user_id, data_key)
);

-- Tabel song requests
CREATE TABLE IF NOT EXISTS song_requests (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    user_id     INT DEFAULT NULL,
    title       VARCHAR(200) NOT NULL,
    artist      VARCHAR(200) NOT NULL,
    genre       VARCHAR(50) DEFAULT NULL,
    link        VARCHAR(500) DEFAULT NULL,
    note        TEXT DEFAULT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Tabel bug reports
CREATE TABLE IF NOT EXISTS bug_reports (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    user_id     INT DEFAULT NULL,
    type        ENUM('bug','feature','ui','performance','other') DEFAULT 'bug',
    title       VARCHAR(200) NOT NULL,
    detail      TEXT NOT NULL,
    name        VARCHAR(100) DEFAULT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Index untuk performa
CREATE INDEX idx_user_data_user ON user_data(user_id);
CREATE INDEX idx_requests_date ON song_requests(created_at);

SELECT 'Zaymix database setup complete!' as status;
