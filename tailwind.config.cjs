/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        aqua: {
          "primary": "#dc2626",           // red-600 - main red
          "secondary": "#ef4444",         // red-500 - lighter red
          "accent": "#f87171",            // red-400 - accent red
          "neutral": "#991b1b",           // red-800 - dark red for borders/text
          "base-100": "#fff4f4ff",          // pure white background
          "base-200": "#facacaff",          // red-50 - very light red tint
          "base-300": "#e88e8eff",          // red-100 - subtle red background
          "info": "#3b82f6",              // blue-500
          "success": "#10b981",           // green-500
          "warning": "#f59e0b",           // amber-500
          "error": "#b91c1c",             // red-700 - darker red for errors
        },
      },
    ],
  },
}