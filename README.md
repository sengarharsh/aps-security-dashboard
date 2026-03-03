# APS Security Dashboard

Hey there! 👋 Welcome to my **APS Security Dashboard** project. This is a 3-page React application I built to demonstrate a modern, premium B2B SaaS interface for a cybersecurity platform.

## 🚀 Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/sengarharsh/aps-security-dashboard.git
   cd aps-security-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## ✨ Features & What I Built
I focused heavily on UI polish, accessibility, and domain realism to make this feel like a production-ready enterprise tool:

* **Three Core Views**:
  * **Signup/Login**: A beautiful split-screen layout with a deep cyber gradient, Trustpilot reviews, and clean form inputs.
  * **Main Dashboard**: A comprehensive overview with a sidebar, severity summary cards, and a detailed scan list table.
  * **Active Scan Detail**: A granular view of a specific scan, featuring a progress tracker, realistic "Live Scan Console", and a categorized "Finding Log".
* **Theme-Aware Styling (Light/Dark Mode)**: The app seamlessly switches between a clean, high-contrast Light Mode (`#F8FAFC` background) and a deep, immersive Dark Mode (`#0F0F0F` with a subtle radial gradient).
* **Premium UI Touches**: Implemented glassmorphism status badges, custom animated progress bars, subtle card borders, and interactive hover states throughout.
* **Realistic Security Data**: No "Lorem Ipsum" here! The mock data simulates actual B2B security terminology (e.g., "Production Edge Discovery", "OAuth Flow Audit", specific CVE tracking logs).

## 🛠️ Tech Stack
* **Framework**: React + Vite
* **Styling**: Tailwind CSS
* **Icons**: Lucide React
* **Routing**: React Router DOM
* **State Management**: React Context API (`ThemeContext` for light/dark toggling)

## 💡 Design Decisions
* I intentionally kept the "Live Scan Console" dark even in Light Mode because that's what security engineers expect to see (a classic SaaS operational pattern).
* Swapped heavy box-shadows for ultra-thin borders in light mode to give it that modern, clean aesthetic.
* Used Tailwind's semantic `slate` palette for softer, more legible text contrast across both themes.

Feel free to poke around the code and let me know what you think!

---

*Built with ❤️ by [sengarharsh](https://github.com/sengarharsh)*
