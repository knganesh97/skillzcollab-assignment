import React from 'react';

interface CardProps {
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ header, body, footer, className = '', style }) => {
    return (
        <div
            className={`rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900 transition-transform hover:shadow-lg hover:-translate-y-1 ${className}`}
            style={{
                background: "var(--card-background)",
                color: "var(--card-foreground)",
                ...style,
            }}
        >
            {header && (
                <div className="px-6 pt-6 pb-2 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3">
                    {header}
                </div>
            )}
            {body && (
                <div className="px-6 py-4">
                    {body}
                </div>
            )}
            {footer && (
                <div className="px-6 pb-4 pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;