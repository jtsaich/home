"use client";

import React, { useEffect } from "react";

// Client component for spotlight effect
export function SpotlightEffect() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      const spotlight = document.getElementById("spotlight");
      if (spotlight) {
        spotlight.style.background = `
          radial-gradient(
            800px circle at ${x}px ${y}px,
            rgba(255, 20, 147, 0.1),
            transparent 80%
          )
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="spotlight"
      className="pointer-events-none absolute top-0 inset-0 z-30 transition-all duration-300"
      style={{
        background: `
          radial-gradient(
            800px circle at 50% 50%,
            rgba(255, 20, 147, 0.1),
            transparent 80%
          )
        `,
      }}
    />
  );
}
