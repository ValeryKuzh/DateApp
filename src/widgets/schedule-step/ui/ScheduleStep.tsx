import { useState } from 'react';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { DateTimePicker } from '@/features/pick-datetime';
import styles from './ScheduleStep.module.css';

interface ScheduleStepProps {
    onConfirm: (when: string) => void;
}

export const ScheduleStep = ({ onConfirm }: ScheduleStepProps) => {
    const [when, setWhen] = useState('');

    return (
        <Card>
            <h2 className={styles.title}>Выбери удобный вариант 🗓️</h2>
            <DateTimePicker value={when} onChange={setWhen} />
            <Button
                variant="primary"
                disabled={!when}
                onClick={() => onConfirm(when)}
                style={{ marginTop: '16px', width: '100%' }}
            >
                Забронировать свидание ❤️
            </Button>
        </Card>
    );
};