# 🌸 Selfie Unisex Salon & Spa — TI Mall Indore

> **Indore’s Premier Unisex Beauty & Spa Destination** — A luxury full-stack web application featuring bespoke hair styling, skin therapies, royal HD bridal packages, interactive booking concierge, before/after transformation comparisons, and **Aura**, an integrated AI Beauty Concierge powered by **Gemini 3.6 Flash**.

Located on the 3rd Floor of Treasure Island Mall (TI Mall) on MG Road, Indore, **Selfie Unisex Salon** blends world-class beauty artistry with calm, soothing luxury.

---

## ✨ Features

- 💇 **Luxury Salon Services Directory**: Full service catalog with starting prices, duration, features, and detailed modal views.
- 👑 **Royal Bridal Sanctuary**: Dedicated packages for HD Airbrush bridal makeup, pre-bridal consultations, and groom styling.
- 🪞 **Interactive Before/After Slider**: Interactive visual comparison sliders for hair botox, balayage, and hydrafacial results.
- 🤖 **Aura AI Beauty Concierge**: Real-time AI chatbot built with the official `@google/genai` TypeScript SDK and Express backend, providing personalized treatment recommendations, pricing, and salon details.
- 📅 **Concierge Appointment Reservation**: Multi-step interactive booking modal with instant appointment reference codes.
- 🏷️ **Privileges & Special Offers**: Limited-time TI Mall shopper discounts, student specials, and VIP pass credits.
- 📍 **Concierge Location & Hours**: Live TI Mall MG Road direction guidance and direct WhatsApp/Phone booking links.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Motion (Framer Motion)
- **Backend**: Express.js, Node.js (Full-stack Express + Vite Architecture)
- **AI Integration**: Google GenAI SDK (`@google/genai`) running server-side with Gemini 3.6 Flash
- **Icons & Styling**: Lucide React icons, bespoke serif display typography (`Playfair Display`, `Cormorant Garamond`)
- **Build Tooling**: `esbuild` for production backend bundling, `tsx` for dev server execution

---

## 🚀 Getting Started Locally

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **bun**
- **Gemini API Key**: Obtainable from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/selfie-unisex-salon.git
cd selfie-unisex-salon
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and add your Gemini API Key:

```env
GEMINI_API_KEY="your_actual_gemini_api_key_here"
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with live reload and full AI chatbot support.

---

## 📦 Production Build & Deployment

### Build the Application

```bash
npm run build
```

This compiles the Vite frontend into `dist/` and bundles `server.ts` into `dist/server.cjs` using `esbuild`.

### Start Production Server

```bash
npm run start
```

The application will start on port `3000` (or `PORT` environment variable).

---

## 📤 How to Export & Push to GitHub from AI Studio

1. In the **AI Studio UI**, open the **Settings** menu (top right header icon).
2. Click **Export to GitHub** (or **Export ZIP**).
3. If using Export to GitHub:
   - Authenticate with your GitHub account.
   - Choose a repository name (e.g. `selfie-unisex-salon-indore`).
   - Click **Create & Export**.
4. Clone your new GitHub repository locally to continue developing or deploy to platforms like Cloud Run, Vercel, Railway, or Render!

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
