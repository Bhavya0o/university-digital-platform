// Set VITE_API_URL in .env (local) and in Vercel Project Settings → Environment Variables.
// Example production value: https://your-backend.onrender.com
export const API_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:5000";
