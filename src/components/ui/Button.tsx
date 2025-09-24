'use client'
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        {...props}
    >
        {children}
    </button>
);

export default Button;