# 🛡️ APS Security Dashboard

Hey! 👋 Welcome to my **APS Security Dashboard**. 

I built this React application to demonstrate what a modern, premium B2B SaaS interface should look and feel like for cybersecurity professionals. My goal was to create a highly polished, accessible, and production-ready enterprise UI.

## ✨ Why I Built This (And What Makes It Special)

I wanted to move beyond the typical tutorial project and build something that feels like a genuine enterprise tool. Here are the highlights:

* 🌓 **Immersive Themes**: I implemented a seamless light and dark mode toggle using React Context. Light mode is crisp and clean with a `#F8FAFC` background, while dark mode dives into an immersive `#0F0F0F` environment.
* 💎 **Premium UI Aesthetics**: You'll notice modern touches everywhere—glassmorphism status badges, custom animated progress bars, subtle hover states, and fully responsive layouts.
* 🔒 **Authentic Security Data**: Instead of standard "Lorem Ipsum", I used realistic cybersecurity terminology (like "Production Edge Discovery" or "OAuth Flow Audit") so it accurately reflects a security engineer's day-to-day workflow.
* 📱 **Fully Responsive**: I made sure the experience is just as smooth on mobile and tablets as it is on a full desktop monitor.

## 🏗️ What's Inside

The app is broken down into three main experiences:

1. **Authentication**: A beautiful split-screen signup/login page. It pairs a deep cyber gradient on one side with clean, accessible form inputs on the other.
2. **Main Dashboard**: The command center. It features a responsive sidebar, high-level severity summary cards, and a detailed, sortable table for all recent scans.
3. **Active Scan Detail**: A focused view for an ongoing security scan. It includes a realistic "Live Scan Console" (intentionally kept dark across all themes to match real security tools) and a categorized "Finding Log".

## 🛠️ The Tech Stack

I chose a modern React ecosystem for the best mix of performance and developer experience:

* **Core**: React 19 + Vite for blazing-fast development
* **Styling**: Tailwind CSS (v4) to manage the design system and themes
* **Icons**: Lucide React for crisp, scalable vector icons
* **Routing**: React Router DOM for smooth client-side navigation
* **State**: React Context API (`ThemeContext`) for managing the global theme

## 🚀 Want to run it locally?

It's super easy to get it running on your machine:

1. **Clone the repo:**
   ```bash
   git clone https://github.com/sengarharsh/aps-security-dashboard.git
   cd aps-security-dashboard
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```

## 🧠 A Few Design Decisions

If you're curious about *why* I built things the way I did:
* **The "Live Console" Pattern**: I locked the "Live Scan Console" to a dark theme even when the app is in light mode. Real security engineers spend a lot of time in terminals, so this feels much more natural to them.
* **Typography & Readability**: I used the `Inter` font for strict, highly readable typography. I also relied on Tailwind's `slate` colors rather than pure black/white to ensure softer, accessible text contrast.

---

*Designed and Built by [Harsh Sengar](https://github.com/sengarharsh)*
