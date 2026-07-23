import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Assistant Chatbot API Route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "A valid message string is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ 
          error: "GEMINI_API_KEY is not configured.",
          reply: "I am currently running in preview mode without an API key attached. You can ask about our salon services, location at TI Mall Indore, pricing, or click 'Book Appointment' to reserve your slot!" 
        });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const systemInstruction = `You are "Aura", the official AI Luxury Beauty Concierge for Selfie Unisex Salon.
Salon Details:
- Location: 3rd Floor, Treasure Island Mall (TI Mall), MG Road, Indore, MP, India.
- Operating Hours: 10:00 AM - 9:00 PM every day (Monday to Sunday).
- Contact Phone: +91 98260 12345
- Salon Atmosphere: Serene, peaceful, private bridal suites, complimentary gourmet beverages, certified master stylists.

Core Offerings & Pricing Guidance:
- Hair Care: Precision Haircuts (Starts ₹499), Hair Botox Deep Conditioning Therapy (Starts ₹3,499), Keratin Smoothening (Starts ₹2,999), Balayage & Global Hair Coloring (Starts ₹2,499).
- Skin & Facials: HydraFacial MD (Starts ₹2,499), Organic Oxy-Glow Facial (Starts ₹1,499), Instant De-Tan & Brightening (Starts ₹899).
- Bridal & Groom: Royal HD Bridal Makeup (Starts ₹14,999 - includes pre-bridal trial, HD airbrush, drape & hair styling), Groom Royalty Package (Starts ₹4,999).
- Nails & Feet: Gel Nail Extensions (Starts ₹1,499), Luxury Spa Pedicure & Manicure (Starts ₹999).
- Exclusive Offers: TI Mall Shopper 20% Discount, Early Bird Bridal Special with Complimentary Trial, VIP Annual Pass Credits.

Guidelines:
1. Always be warm, courteous, elegant, and helpful.
2. Keep answers concise, easy to read, and well-structured using bullet points or short paragraphs.
3. Recommend specific services and encourage the user to click the "Book Appointment" button or visit TI Mall 3rd Floor.`;

      // Format conversation history for Gemini Chat SDK
      const formattedHistory = Array.isArray(history)
        ? history.map((item: any) => ({
            role: item.role === 'user' ? 'user' : 'model',
            parts: [{ text: item.content || item.text || '' }]
          })).filter(h => h.parts[0].text.trim() !== '')
        : [];

      const chat = ai.chats.create({
        model: "gemini-3.6-flash",
        config: {
          systemInstruction,
          temperature: 0.7,
        },
        history: formattedHistory,
      });

      const response = await chat.sendMessage({ message });
      const reply = response.text || "Thank you for asking! I'd be delighted to assist you at Selfie Unisex Salon. Would you like me to help you reserve an appointment at TI Mall Indore?";

      return res.json({ reply });
    } catch (error: any) {
      console.error("Error in AI Chatbot API:", error);
      return res.status(500).json({ 
        error: "Internal server error",
        reply: "I apologize, I experienced a brief connection hiccup. Please try asking again or feel free to book an appointment directly using our online reservation tool!" 
      });
    }
  });

  // Vite middleware setup for dev vs static build for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
