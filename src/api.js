// In production, we use a relative path since vercel.json rewrites /api/* to the backend service.
// In local development, we use VITE_API_URL from .env, or fall back to localhost:5000.
export const API_URL = import.meta.env.PROD
  ? ""
  : (import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:5000");