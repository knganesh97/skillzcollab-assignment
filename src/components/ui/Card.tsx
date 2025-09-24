import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = '', style }) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-md p-6 ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default Card;