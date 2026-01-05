import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getMarketInsight = async (query: string): Promise<string> => {
  if (!apiKey) {
    return "API Key belum dikonfigurasi. Harap hubungi administrator sistem.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `Anda adalah 'Inba AI Tutor', mentor virtual dari Inba University.
        Tugas Anda adalah membantu calon siswa atau siswa memahami konsep trading.
        Gaya bicara Anda suportif, edukatif, dan profesional.
        Fokus pada edukasi: Jelaskan "mengapa" dan "bagaimana", jangan hanya memberi sinyal.
        Tekankan pentingnya manajemen risiko dan psikologi.
        Jawablah dengan ringkas (maksimal 3 paragraf pendek) dalam Bahasa Indonesia.`,
      },
    });

    return response.text || "Maaf, saya tidak dapat menjawab pertanyaan tersebut saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan saat menghubungi server AI. Silakan coba lagi nanti.";
  }
};