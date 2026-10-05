import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
}

export const Button = ({
                           children,
                           variant = 'primary',
                           className = '',
                           style,
                           ...props
                       }: ButtonProps) => {
    const variantClass = styles[variant];

    return (
        <button
            {...props}
            style={style}
            className={`${styles.button} ${variantClass} ${className}`.trim()}
        >
            {children}
        </button>
    );
};