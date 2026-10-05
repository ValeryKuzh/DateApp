import type { DateOption } from '../model/types';
import styles from './DateOptionCard.module.css';

interface DateOptionCardProps {
    option: DateOption;
    isSelected?: boolean;
    onSelect: (id: string) => void;
}

export const DateOptionCard = ({ option, isSelected, onSelect }: DateOptionCardProps) => {
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(option.id)}
        >
            <div className={styles.emoji}>{option.emoji}</div>
            <div className={styles.title}>{option.title}</div>
            <p className={styles.description}>{option.description}</p>
        </div>
    );
};