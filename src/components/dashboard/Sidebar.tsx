"use client";
import { motion } from "framer-motion";
import { BarChart3, BookOpen, Home, Settings } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  const navItems = [
    {
      label: "Dashboard",
      icon: Home,
    },
    {
      label: "Courses",
      icon: BookOpen,
    },
    {
      label: "Progress",
      icon: BarChart3,
    },
    {
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <nav className="hidden md:block w-24 xl:w-72 min-h-[calc(100vh-2rem)] rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-zinc-100  ">
      <h2 className="mb-8 text-xl font-bold hidden xl:block">LearnHub</h2>

      <ul className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.label}>
              <button
                onClick={() => setActive(item.label)}
                className="relative w-full rounded-xl px-3 py-2 text-left hover:cursor-pointer"
              >
                {active === item.label && (
                  <motion.div
                    layoutId="sidebar-highlight"
                    className="absolute inset-0 rounded-xl bg-zinc-800"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}
                <div className="relative z-10 flex items-center justify-center xl:justify-start gap-3">
                  <Icon size={18} />
                  <span className="hidden xl:inline">{item.label}</span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
