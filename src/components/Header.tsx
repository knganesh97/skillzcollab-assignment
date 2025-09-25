'use client'
import React from "react";
import Link from "@/components/ui/Link";

const Header: React.FC = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 2px 8px 0 rgba(79,140,255,0.06)",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 2.5rem",
        transition: "box-shadow 0.2s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 40,
            height: 40,
            background: "linear-gradient(135deg, #4f8cff 60%, #7fbcff 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 22,
            marginRight: 14,
            boxShadow: "0 2px 8px 0 rgba(79,140,255,0.10)",
            letterSpacing: "1px",
          }}
        >
          S
        </div>
        <span
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#222",
            letterSpacing: "0.5px",
            fontFamily: "var(--font-geist-sans), sans-serif",
          }}
        >
          SkillzCollab
        </span>
      </div>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link
          href="/challenges"
          style={{
            textDecoration: "none",
            color: "#4f8cff",
            fontWeight: 600,
            fontSize: 16,
            padding: "0.4rem 1.1rem",
            borderRadius: "6px",
            transition: "background 0.15s, color 0.15s",
            background: "transparent",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLElement).style.background = "#eaf2ff";
            (e.target as HTMLElement).style.color = "#2563eb";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLElement).style.background = "transparent";
            (e.target as HTMLElement).style.color = "#4f8cff";
          }}
        >
          Challenges
        </Link>
      </nav>
    </header>
  );
};

export default Header;