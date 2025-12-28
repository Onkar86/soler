# Deployment & Usage Instructions - Onkar Solar Smart Card

## 1. Project Setup
- **Install Node.js** (if not already installed).
- **Navigate to the folder**: `cd onkar-solar-card`
- **Install Dependencies**: `npm install`
- **Start Local Server**: `npm run dev` (Access at `http://localhost:5173`)

## 2. PWA Icons & Assets
- The app uses placeholder icons in `public/`.
- **Action Required**:
    - Replace `public/pwa-192x192.png` (192x192 px)
    - Replace `public/pwa-512x512.png` (512x512 px)
    - Replace `public/visiting-card.pdf` with the actual PDF.
    - Replace `public/solar-brochure.pdf` with the actual PDF.

## 3. Dynamic QR Code Configuration
To ensure the QR code never changes even if you change hosting:
1.  **Use a Shortlink Service**: Bit.ly, Rebrandly, or a dedicated QR service.
2.  **Create a Link**: e.g., `bit.ly/onkar-solar` pointing to your current hosting URL (e.g., `https://onkar-solar.vercel.app`).
3.  **Generate QR**: Go to `qr-code-generator.com` or similar and generate a QR for `bit.ly/onkar-solar`.
4.  **Future Updates**: If you move the site, just update the destination URL in Bit.ly. The QR code remains the same.

## 4. Deployment (Vercel) - Recommended
Vercel is free and simplest for React apps.
1.  Push this code to GitHub.
2.  Go to [Vercel.com](https://vercel.com) -> Login.
3.  Click "Add New..." -> "Project".
4.  Import your GitHub repository.
5.  Click "Deploy".
6.  You will get a URL (e.g., `onkar-solar.vercel.app`).
7.  **Map Custom Domain**: If you have `gamaera.com`, you can add a subdomain like `card.gamaera.com` in Vercel settings.

## 5. Deployment (GitHub Pages)
1.  Update `vite.config.js`: Add `base: '/repo-name/',` (Replace `repo-name` with your GitHub repo name).
2.  Run `npm run build`.
3.  Deploy the `dist` folder to gh-pages branch.

## 6. AI Chatbot
- Currently, the chatbot uses a rule-based system (mock AI) which is free and fast.
- To upgrade to real OpenAI (ChatGPT):
    1.  Get an API Key from OpenAI.
    2.  Create a backend API (Vercel Functions/Node.js) to hide the key.
    3.  Update `AIChatBot.jsx` to call your API.

## 7. Changing Content
- Open `src/data/content.js`.
- Edit the text inside `en` (English) or `mr` (Marathi) objects.
- Save and deploy.
