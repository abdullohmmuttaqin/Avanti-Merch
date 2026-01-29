# Avanti‑Merch

Platform e‑commerce sederhana dengan integrasi **Midtrans Payment Gateway**, dibangun menggunakan **PHP** dan dikelola secara kolaboratif menggunakan **Git & GitHub**.

---

## 📌 Deskripsi Proyek

Avanti‑Merch adalah proyek pembelajaran sekaligus implementasi sistem pembayaran online (Midtrans Snap) pada website e‑commerce. Repository ini disiapkan agar **siap dikerjakan tim**, dengan pemisahan konfigurasi sensitif, alur kerja Git yang rapi, dan dokumentasi yang jelas.

---

## 🧑‍🤝‍🧑 Tim Pengembang

| Nama           | Peran                       | Akun GitHub        |
| -------------- | --------------------------- | ------------------ |
| Abdul Muttaqin | Backend / Integrasi Payment | @abdullohmmuttaqin |
| Ain Murphy     | Frontend / Reviewer         | @ainmurphys        |

---

## 🛠️ Teknologi yang Digunakan

* **PHP 8+**
* **Composer** (Dependency Manager)
* **Midtrans PHP SDK**
* **dotenv (vlucas/phpdotenv)**
* **Git & GitHub**
* **XAMPP / Apache (Local Server)**

---

## 📁 Struktur Folder Utama

```
Avanti-Merch/
├── php/
│   ├── midtrans-php-master/
│   └── placeOrder.php
├── vendor/                # (di-generate oleh Composer)
├── .env                   # (TIDAK di-push ke GitHub)
├── .gitignore
├── composer.json
├── composer.lock
├── index.html
└── README.md
```

---

## 🔐 Keamanan & File Sensitif

File berikut **TIDAK BOLEH** dipush ke GitHub:

* `.env`
* `vendor/`

Pastikan sudah tercantum di `.gitignore`.

Contoh `.env` (hanya lokal):

```env
MIDTRANS_SERVER_KEY=SB-Mid-server-xxxx
MIDTRANS_IS_PRODUCTION=false
```

---

## ⚙️ Setup Proyek (Untuk Anggota Tim)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/abdullohmmuttaqin/Avanti-Merch.git
cd Avanti-Merch
```

### 2️⃣ Install Dependency

Pastikan Composer sudah ter-install.

```bash
composer install
```

### 3️⃣ Buat File `.env`

```bash
cp .env.example .env
```

Isi sesuai **Server Key Midtrans masing‑masing**.

---

## 🌿 Alur Kerja Git (Team Workflow)

### Branching Strategy

* `main` → branch stabil / produksi
* `feature/*` → pengembangan fitur

Contoh:

```bash
git checkout -b feature/payment-gateway
```

### Commit Message Convention

Gunakan format:

```
feat: integrasi midtrans snap
fix: perbaikan validasi pembayaran
chore: update .gitignore
```

---

## 🚀 Testing Pembayaran (Sandbox)

1. Jalankan server lokal (XAMPP)
2. Akses:

```
http://localhost/Avanti-Merch/
```

3. Gunakan akun **Midtrans Sandbox**
4. Gunakan kartu uji:

```
Card Number: 4811 1111 1111 1114
CVV: 123
Exp: 01/25
```

---

## 📊 Monitoring Repository

* **Commit Graph**: `Insights → Network`
* **Contributors**: `Insights → Contributors`
* **Activity**: `Insights → Pulse`

---

## 📌 Catatan Penting

* Jika file seperti `composer.json` terlihat di GitHub → **itu BENAR & WAJIB**
* Yang tidak boleh tampil hanya `.env` dan `vendor/`
* GitHub **tidak menjalankan PHP**, hanya menyimpan kode

---

## 📄 Lisensi

Proyek ini digunakan untuk **pembelajaran & pengembangan internal**.

---

✨ *Happy coding & teamwork!* 🚀
