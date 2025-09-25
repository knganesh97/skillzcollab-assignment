import React from "react";

const Footer: React.FC = () => (
  <footer
    style={{
      width: "100%",
      padding: "1rem 0",
      textAlign: "center",
      background: "var(--footer-bg)",
      color: "var(--footer-text)",
      fontSize: "0.9rem",
      borderTop: "1px solid var(--footer-border)",
    }}
  >
    © {new Date().getFullYear()} SkillzCollab. All rights reserved.
  </footer>
);

export default Footer;