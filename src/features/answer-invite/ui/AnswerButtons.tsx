import type { CSSProperties } from 'react';
import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import styles from './AnswerButtons.module.css';

interface AnswerButtonsProps {
    onAccept: () => void;
}

export const AnswerButtons = ({ onAccept }: AnswerButtonsProps) => {
    const [noBtnStyle, setNoBtnStyle] = useState<CSSProperties>({});

    const handleMouseEnterNo = () => {
        const randomX = Math.floor(Math.random() * 300) - 150;
        const randomY = Math.floor(Math.random() * 300) - 150;

        setNoBtnStyle({
            transform: `translate(${randomX}px, ${randomY}px)`,
        });
    };

    return (
        <div className={styles.container}>
            <Button variant="primary" onClick={onAccept}>
                Да! ❤️
            </Button>
            <Button
                variant="secondary"
                onMouseEnter={handleMouseEnterNo}
                className={styles.noButton}
                style={noBtnStyle}
            >
                Нет 😢
            </Button>
        </div>
    );
};