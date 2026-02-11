# 🚀 PANDUAN LENGKAP: GOOGLE SEARCH CONSOLE (GSC)

**Inba University - SEO Intelligence**

Panduan ini disusun khusus untuk `inbauniversity.com` agar website Anda terindeks dengan cepat dan maksimal di mesin pencari Google.

---

## 🎯 APA ITU GOOGLE SEARCH CONSOLE?

Berbeda dengan Google Analytics (yang melihat _siapa_ pengunjungnya), **Search Console** berfungsi untuk:

1.  **Meminta Google** untuk segera mencatat (index) website Inba University.
2.  **Melihat kata kunci (keywords)** apa yang diketik orang saat mencari Inba.
3.  **Mendeteksi error** jika website tidak bisa dibuka oleh bot Google.

---

## 🛠️ LANGKAH 1: DAFTAR PROPERTI

1.  Buka [search.google.com/search-console](https://search.google.com/search-console).
2.  Login dengan email Google yang sama dengan Google Analytics (agar sinkron).
3.  Anda akan melihat dua pilihan jenis properti:

    - **Domain** (Kiri) - _Membutuhkan akses DNS hosting._
    - **URL Prefix** (Kanan) - _Lebih mudah, cukup upload file atau tambah kode HTML._

    👉 **SAYA SARANKAN PILIH "URL PREFIX" (KANAN)** karena lebih mudah.

4.  Masukkan URL lengkap: `https://inbauniversity.com`
5.  Klik **CONTINUE**.

---

## 🔐 LANGKAH 2: VERIFIKASI KEPEMILIKAN

Google akan memberikan beberapa cara verifikasi. Pilih **HTML Tag** (biasanya di bawah menu "Other verification methods").

1.  Klik panah di bagian **HTML Tag**.
2.  Anda akan melihat kode seperti: `<meta name="google-site-verification" content="....." />`
3.  **COPY** kode unik di dalam tanda kutip `content="..."`.
    - Contoh: Jika kodenya `<meta ... content="AbCdE_12345" />`, maka copy `AbCdE_12345`-nya saja.

---

## 💻 LANGKAH 3: PASANG DI KODE (Sudah Saya Siapkan Slotnya)

Saya sudah menyiapkan tempat khusus di codingan website Anda agar Anda tidak bingung.

1.  Buka file `index.html`.
2.  Cari baris ke-18 (kurang lebih):
    ```html
    <!-- Google Search Console Verification -->
    <meta
      name="google-site-verification"
      content="GANTI_DENGAN_KODE_VERIFIKASI_GOOGLE_SEARCH_CONSOLE"
    />
    ```
3.  Ganti tulisan `GANTI_DENGAN_KODE...` dengan kode unik yang Anda copy dari Google tadi.
4.  **Save** file dan lakukan **Deploy** ulang website Anda.

---

## ✅ LANGKAH 4: KLIK VERIFY DI GOOGLE

1.  Setelah website selesai di-deploy (tunggu 1-2 menit).
2.  Kembali ke halaman Google Search Console tadi.
3.  Klik tombol **VERIFY** di bagian HTML Tag.
4.  Jika sukses, akan muncul pesan hijau "Ownership verified".

---

## 🗺️ LANGKAH 5: SUBMIT SITEMAP (PENTING!)

Agar Google tidak meraba-raba isi website, kita berikan "peta" isinya.

1.  Di Dashboard Search Console (menu kiri), klik **Sitemaps**.
2.  Di kolom "Add a new sitemap", ketik: `sitemap.xml`
3.  Klik **SUBMIT**.
4.  Status harus menjadi **Success** (Hijau).

> **Catatan:** Saya sudah merapikan file `sitemap.xml` Anda agar sesuai standar Google (menghapus link anchor # yang berpotensi dianggap duplikat).

---

## 📈 SETELAH SELESAI

Tunggu 2-3 hari, data akan mulai masuk. Anda bisa melihat:

- **Performance**: Berapa kali Inba University muncul di Google.
- **Queries**: Kata kunci apa yang orang cari.
- **Pages**: Halaman mana yang paling populer di Google.
