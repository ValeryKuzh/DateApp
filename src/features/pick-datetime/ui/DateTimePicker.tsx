import styles from './DateTimePicker.module.css';

const WHEN_OPTIONS = [
    { id: 'weekend', label: ' На этих выходных' },
    { id: 'weekday-evening', label: ' В будний день вечером' },
    { id: 'next-week', label: ' На следующей неделе' },
    { id: 'surprise', label: ' На твой выбор / Напиши мне' },
];

interface DateTimePickerProps {
    value: string;
    onChange: (val: string) => void;
}

export const DateTimePicker = ({ value, onChange }: DateTimePickerProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>Когда тебе удобнее встретиться?</label>
            <div className={styles.optionsGrid}>
                {WHEN_OPTIONS.map((opt) => (
                    <button
                        key={opt.id}
                        type="button"
                        className={`${styles.optionBtn} ${
                            value === opt.label ? styles.selectedOption : ''
                        }`}
                        onClick={() => onChange(opt.label)}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
};