#!/bin/bash

# ==========================================
# 🔧 CONFIGURATION (ISI DATA ANDA DI SINI)
# ==========================================
# 1. Masukkan Username SSH Hostinger Anda
SSH_USER="u326614563"

# 2. Masukkan IP Hostinger Anda
SSH_HOST="145.79.14.111"

# 3. Masukkan Port SSH (Default Hostinger biasanya 65002)
SSH_PORT="65002"

# 4. Masukkan Nama Domain / Folder Public HTML Anda
# Contoh: /home/u123456789/domains/inbauniversity.com/public_html
# PASTIKAN PATH INI BENAR 100%! Salah path = file hilang.
REMOTE_DIR="/home/u326614563/domains/inbauniversity.com/public_html"

# ==========================================
# 🚀 SCRIPT START (JANGAN UBAH DI BAWAH INI)
# ==========================================

echo "🚧 [1/5] Building project for Production..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build GAGAL! Perbaiki error dulu."
    exit 1
fi

echo "📦 [2/5] Compressing files..."
# Hapus jika ada sisa file lama
rm -f deploy.tar.gz
# Kompres isi folder dist
tar -czf deploy.tar.gz -C dist .

echo "📤 [3/5] Uploading to Hostinger..."
scp -P $SSH_PORT deploy.tar.gz $SSH_USER@$SSH_HOST:$REMOTE_DIR
if [ $? -ne 0 ]; then
    echo "❌ Upload GAGAL! Cek koneksi atau password."
    exit 1
fi

echo "🔓 [4/5] Extracting on Server..."
# Masuk ke server -> Pindah folder -> Ekstrak tumpuk file lama -> Hapus file zip
ssh -p $SSH_PORT $SSH_USER@$SSH_HOST "cd $REMOTE_DIR && tar -xzf deploy.tar.gz && rm deploy.tar.gz"

echo "🧹 [5/5] Cleaning up local files..."
rm deploy.tar.gz

echo "✅ DEPLOYMENT SUCCESS! Website Updated."
echo "🌍 Check your site now."
