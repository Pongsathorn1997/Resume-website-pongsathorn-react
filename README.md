# Interactive Resume Website

A modern, high-performance, and visually striking interactive resume website built with **React 19**, **TypeScript**, and **Tailwind CSS**. This project features a sleek "cyber-industrial" aesthetic with smooth animations and multi-language support.

## 🚀 Features

- **Cyber-Industrial Design:** Dark-themed UI with cyan accents, glassmorphism, and subtle grid patterns.
- **Interactive Navigation:** Side-scrolling panel system for a unique user experience.
- **Multi-language Support:** Seamlessly switch between **English** and **Thai** versions of the resume.
- **Dynamic Content:** All data (Experience, Projects, Skills) is managed via TypeScript data files for easy updates.
- **Responsive Layout:** Optimized for various screen sizes with a focus on desktop interactivity.
- **Custom Cursor:** Smooth, interactive custom cursor tracking.
- **Plop Component Generator:** Automated component creation for faster development.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Automation:** [Plop](https://plopjs.com/) for component generation.

## 📂 Project Structure

```text
src/
├── assets/             # Images and static assets
├── components/         # Reusable UI components
│   └── LandingPage/    # Main page layout and panels
├── context/            # Language context provider
├── data/               # Resume content (English & Thai)
├── hooks/              # Custom React hooks (useCursor, etc.)
├── types/              # TypeScript interfaces
└── App.tsx             # Root component
```

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd resume-website-pongsathorn-react
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to see the site in action.

## ✍️ Customization

### Updating Resume Data

You can easily update your professional information by editing these files:

- `src/data/resume.eng.ts` (English version)
- `src/data/resume.th.ts` (Thai version)

### Changing the Profile Picture

Replace the profile image in `src/assets/` and update the reference in `src/components/LandingPage/components/ProfilePanel.tsx`.

### Adding Company Logos

Place company logo images in `public/logos/` and update the `companyLogo` path in the resume data files.

## 🏗️ Development Tools

### Component Generation

Use the built-in generator to create new components quickly:

```bash
npm run generate
```

### Building for Production

```bash
npm run build
```

---

Built with 💻 by **Pongsathorn Permkanjaroen**
