import React from "react";

type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer: React.FC<CardContainerProps> = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl shadow-xl p-8 md:p-12 transition-colors ${className}`}
    style={{
      background: "var(--card-background)",
      color: "var(--card-foreground)",
    }}
  >
    {children}
  </div>
);

export default CardContainer;