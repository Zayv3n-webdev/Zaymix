# Zaymix PHP Backend

## Struktur File
```
api/
├── db.php         ← Konfigurasi koneksi database
├── auth.php       ← Register, Login, Logout, Update Profil
├── userdata.php   ← Simpan/muat data per user (favorit, stats, dll)
├── report.php     ← Lapor bug & request lagu (+ Formspree)
└── setup.sql      ← Script buat tabel MySQL
```

## Langkah Setup

### 1. Install / Siapkan Server
- **XAMPP** (Windows/Mac) atau **Laragon** → aktifkan Apache + MySQL
- **Hosting** → bisa pakai Niagahoster, IDCloudHost, dll (sudah ada PHP+MySQL)

### 2. Buat Database
```bash
# Buka phpMyAdmin atau terminal MySQL:
mysql -u root -p < api/setup.sql
```
Atau paste isi setup.sql di phpMyAdmin → SQL tab → Go.

### 3. Edit Konfigurasi
Buka `api/db.php`, sesuaikan:
```php
define('DB_HOST', 'localhost');
define('DB_USER', 'nama_user_mysql');
define('DB_PASS', 'password_mysql');
define('DB_NAME', 'zaymix_db');
```

### 4. Upload File
- Taruh semua file Zaymix (index.html, style.css, script.js, api/) ke folder htdocs (XAMPP) atau public_html (hosting).

### 5. Aktifkan PHP Backend di script.js
Ubah konstanta di awal script.js:
```js
const USE_PHP_BACKEND = true;
const API_BASE = 'api'; // atau URL hosting kamu
```

### 6. Test
Buka browser → `http://localhost/zaymix/` → coba register akun baru.

## API Endpoints

| File | Action | Method | Deskripsi |
|------|--------|--------|-----------|
| auth.php | register | POST | Daftar akun baru |
| auth.php | login | POST | Masuk akun |
| auth.php | logout | POST | Keluar |
| auth.php | update_profile | POST | Update foto/warna/border |
| userdata.php | save | POST | Simpan satu data |
| userdata.php | load | GET | Muat satu data |
| userdata.php | load_all | GET | Muat semua data user |
| userdata.php | save_bulk | POST | Simpan banyak data sekaligus |
| report.php | bug_report | POST | Lapor bug → DB + Formspree |
| report.php | song_request | POST | Request lagu → DB + Formspree |