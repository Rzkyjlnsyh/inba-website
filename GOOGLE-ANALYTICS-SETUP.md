# 📊 PANDUAN SETUP GOOGLE ANALYTICS 4 (GA4) - INBA UNIVERSITY

## 🎯 TUJUAN

Menghubungkan website `inbauniversity.com` dengan Google agar Anda tahu:

- Berapa orang yang buka website.
- Dari kota mana mereka berasal.
- Tombol mana yang mereka klik.

---

## 🛠️ LANGKAH 1: BUAT AKUN GOOGLE ANALYTICS

1. Buka browser dan kunjungi: [analytics.google.com](https://analytics.google.com)
2. Login menggunakan akun Gmail (sebaiknya akun bisnis/utama).
3. Klik tombol biru **"Start measuring"** (Mulai mengukur).

### **A. Account Setup (Setelan Akun)**

- **Account Name:** Isi dengan `Inba University`.
- Centang semua kotak opsi (Google Products & Services, Benchmarking, dll) - ini aman.
- Klik **Next**.

### **B. Property Setup (Setelan Properti)**

- **Property Name:** Isi dengan `Inba University Web`.
- **Reporting Time Zone:** Pilih `Indonesia` -> `(GMT+07:00) Jakarta`.
- **Currency:** Pilih `Indonesian Rupiah (IDR)`.
- Klik **Next**.

### **C. Business Details (Detail Bisnis)**

- **Industry Category:** Pilih `Finance` atau `Jobs & Education`.
- **Business Size:** Pilih `Small (1-10 employees)`.
- Klik **Next**.

### **D. Business Objectives (Tujuan)**

- Pilih **"Generate leads"** (Mendapatkan prospek) atau **"Get baseline reports"**.
- Klik **Create**.
- Centang "I accept" pada perjanjian layanan -> Klik **I Accept**.

---

## 🔗 LANGKAH 2: DAPATKAN MEASUREMENT ID

1. Anda akan diminta memilih platform. Pilih tombol **Web**.
2. **Website URL:** Ketik `inbauniversity.com` (pastikan `https://` sudah terpilih di kiri).
3. **Stream Name:** Isi `Inba Web Main`.
4. Klik **Create stream**.
5. **PENTING:** Anda akan melihat halaman "Web stream details".
   - Cari tulisan **MEASUREMENT ID** di pojok kanan atas.
   - Formatnya seperti: `G-XXXXXXXXXX` (Huruf G diikuti angka/huruf acak).
   - **COPY KODE TERSEBUT.**

---

## 💻 LANGKAH 3: PASANG DI WEBSITE (Coding)

1. Buka file `index.html` di project Anda.
2. Cari baris kode ini (biasanya di bagian atas `<head>`):

```html
<!-- Google Analytics (GA4) -->
<!-- GANTI 'G-XXXXXXXXXX' DENGAN ID GOOGLE ANALYTICS ANDA -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

3. Ganti **KEDUA** tulisan `G-XXXXXXXXXX` dengan ID asli yang Anda copy tadi.

   - Contoh: Jika ID Anda `G-ABC12345`, maka kodenya menjadi:
     `src="...id=G-ABC12345"` DAN `gtag('config', 'G-ABC12345');`

4. Simpan file (`Ctrl+S`).
5. Jalankan deploy script: `./deploy.sh`

---

## ✅ LANGKAH 4: VERIFIKASI (Testing)

1. Buka website `inbauniversity.com` di HP atau Tab baru.
2. Kembali ke halaman Dashboard Google Analytics.
3. Klik menu **Reports** (ikon grafik) di kiri -> **Realtime**.
4. Lihat peta dunia. Jika ada **1 user** (titik biru) di lokasi Anda, berarti **BERHASIL!** 🎉

---

## 💡 TIPS TAMBAHAN

Data biasanya butuh 24 jam untuk muncul lengkap di laporan utama. Jangan panik jika grafik masih kosong di awal. Gunakan menu **Realtime** untuk cek instan.
