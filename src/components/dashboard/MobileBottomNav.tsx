"use client";
import { motion } from "framer-motion";
import { BarChart3, BookOpen, Home, Settings } from "lucide-react";
import { useState } from "react";

export default function MobileBottomNav() {
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-zinc-900 md:hidden">
      <ul className="flex justify-around py-3">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="relative p-2"
            >
              {active === item.label && (
                <motion.div
                  layoutId="mobile-nav-highlight"
                  className="absolute inset-0 rounded-xl bg-zinc-800"
                />
              )}

              <div className="relative z-10">
                <Icon size={22} />
              </div>
            </button>
          );
        })}
      </ul>
    </nav>
  );
}
