'use client'
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<string, string> = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400",
    secondary:
        "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300 focus:ring-2 focus:ring-blue-200",
    ghost:
        "bg-transparent text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-blue-100",
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    className = "",
    ...props
}) => (
    <button
        className={`
            px-6 py-2 rounded-lg font-medium transition
            shadow-sm cursor-pointer
            disabled:opacity-60 disabled:cursor-not-allowed
            ${variantClasses[variant]}
            ${className}
        `}
        {...props}
    >
        {children}
    </button>
);

export default Button;