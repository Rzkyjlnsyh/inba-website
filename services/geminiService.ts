import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * PENTING:
 * 1. Pastikan VITE_GEMINI_API_KEY sudah ada di file .env.local
 * 2. Dapatkan API Key gratis di: https://aistudio.google.com/app/apikey
 */
// Membersihkan API Key dari spasi/karakter tersembunyi
const apiKey = (import.meta.env.VITE_GEMINI_API_KEY || '').trim();

// 🔍 DEBUGGING: Cek apakah Key terbaca oleh Vite (Aman, hanya muncul 4 digit awal & akhir)
if (apiKey) {
  console.log(`AI Config: Key detected (${apiKey.substring(0, 4)}...${apiKey.slice(-4)})`);
} else {
  console.error("AI Config: VITE_GEMINI_API_KEY IS MISSING!");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const getMarketInsight = async (query: string): Promise<string> => {
  if (!apiKey || apiKey.length < 10) {
    return "Error: API Key belum terpasang di file .env.local atau tidak terbaca oleh sistem.";
  }

  try {
    // Gunakan model standar paling stabil
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `Gunakan Bahasa Indonesia. Anda adalah Inba AI Tutor. Jawab singkat: ${query}`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error("DETAILED AI ERROR:", error);
    
    if (error.message?.includes("404")) {
      return `Error 404: Google tidak menemukan model 'gemini-1.5-flash' di akun Anda. Hal ini biasanya terjadi jika 'Generative Language API' belum aktif atau region Anda belum didukung.`;
    }
    
    if (error.message?.includes("403")) {
      return "Error 403: Akses ditolak. API Key salah atau tidak memiliki izin akses.";
    }
    
    return `Gagal terhubung (${error.message || 'Unknown Error'}). Silakan hubungi Support Inba.`;
  }
};