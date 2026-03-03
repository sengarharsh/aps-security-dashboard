# 🛡️ APS Security Dashboard

> A premium, modern B2B SaaS interface designed for cybersecurity professionals. 

Welcome to the **APS Security Dashboard**! This React application was built to demonstrate proficiency in creating production-ready, highly polished, and accessible enterprise user interfaces. It emphasizes strong design principles, realistic domain data, and a seamless developer experience.

## ✨ Project Highlights

I focused heavily on UI polish, accessibility, and domain realism to make this feel like a genuine enterprise tool:

* 🌓 **Immersive Theme Support**: Built with seamless light and dark mode toggling via React Context. The light mode features a crisp `#F8FAFC` background with ultra-thin borders, while the dark mode dives deep into an immersive `#0F0F0F` environment with subtle radial overlays.
* 💎 **Premium UI Aesthetics**: Incorporates modern design trends including glassmorphism status badges, custom animated progress bars, subtle hover interactions, and responsive grid layouts.
* 🔒 **Authentic Domain Realism**: Replaced standard "Lorem Ipsum" with realistic cybersecurity terminology (e.g., "Production Edge Discovery", "OAuth Flow Audit") to accurately simulate a real-world security engineer's workflow. 
* 📱 **Fully Responsive**: Carefully crafted to look great and function perfectly across desktop, tablet, and mobile viewing environments.

## 🏗️ Core Views

The application consists of three primary screens, each tackling a different aspect of SaaS application design:

1. **Authentication (Signup/Login)**: A split-screen layout showcasing brand identity through a deep cyber gradient on one side, paired with clean, accessible form inputs and social auth options on the other.
2. **Main Dashboard Overview**: A comprehensive command center featuring a responsive sidebar, high-level severity summary cards, and a detailed, sortable scan list table.
3. **Active Scan Detail**: A granular, focused view of an ongoing security scan. It features a realistic "Live Scan Console" (intentionally kept dark across themes to match security tool conventions) and a categorized "Finding Log" with severity indicators.

## 🛠️ Technology Stack

This project leverages a modern React ecosystem for optimal performance and developer experience:

* **Core Framework**: React 19 + Vite 
* **Styling & Layout**: Tailwind CSS (v4) for utility-first styling and theme management
* **Iconography**: Lucide React for consistent, scalable vector icons
* **Routing**: React Router DOM for seamless client-side navigation
* **State Management**: React Context API for global theme handling (`ThemeContext`)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sengarharsh/aps-security-dashboard.git
   cd aps-security-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🧠 Design Decisions & Philosophy

To make this stand out to engineering and product teams:
* **The "Live Console" Pattern**: I intentionally locked the "Live Scan Console" to a dark theme, even when the rest of the application is in light mode. This mirrors the genuine expectations of security engineers who frequently work in terminal environments.
* **Typography & Contrast**: Swapped default fonts for strictly defined, highly readable sans-serif typography (`Inter`). Color palettes rely heavily on Tailwind's `slate` scale to ensure softer, more legible text contrast that passes accessibility standards.
* **Component Architecture**: Kept logic cleanly separated into functional components, demonstrating modularity and reusability.

---

*Designed and Built by [Harsh Sengar](https://github.com/sengarharsh)*
