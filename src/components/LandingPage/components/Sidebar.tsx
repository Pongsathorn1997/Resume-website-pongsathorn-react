import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../context/LanguageContext";
import "./Sidebar.css";

const navItems = [
  {
    id: "resume",
    path: "/",
    translationKey: "resume",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
  },
  {
    id: "work",
    path: "/work",
    translationKey: "work",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    ),
  },
  {
    id: "projects",
    path: "/projects",
    translationKey: "projects",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    id: "skills",
    path: "/skills",
    translationKey: "skills",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
        />
      </svg>
    ),
  },
  {
    id: "contact",
    path: "/contact",
    translationKey: "contact",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="mobile-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Overlay for mobile */}
      <div
        className={`sidebar-overlay ${isOpen ? "is-open" : ""}`}
        onClick={toggleSidebar}
      />

      <aside className={`sidebar-aside ${isOpen ? "is-open" : ""}`}>
        {/* Logo */}
        <span className="font-display text-lg tracking-widest text-cyan-400 sidebar-logo">
          PP
        </span>

        {/* Nav */}
        <nav className="w-full">
          <ul className="sidebar-nav-list">
            {navItems.map((item) => (
              <li
                key={item.id}
                title={t(item.translationKey)}
                className="w-full"
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? "active" : ""}`
                  }
                >
                  <span className="shrink-0">{item.icon}</span>
                  <span className="nav-label">{t(item.translationKey)}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-bottom-actions">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "th" : "en")}
            className="font-mono text-[0.7rem] text-neutral-500 transition-colors hover:text-cyan-400 uppercase tracking-widest"
            title="Switch Language"
          >
            {language === "en" ? "TH" : "EN"}
          </button>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="text-neutral-500 transition-colors hover:text-cyan-400"
            title="Download CV"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </div>
      </aside>
    </>
  );
}
