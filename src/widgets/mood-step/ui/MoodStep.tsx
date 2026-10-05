import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import { MOOD_OPTIONS } from '@/entities/mood';
import styles from './MoodStep.module.css';

interface MoodStepProps {
    onSelectMood: (moodId: string) => void;
}

export const MoodStep = ({ onSelectMood }: MoodStepProps) => {
    return (
        <Card>
            <h2 className={styles.title}>Привет! Как твоё настроение сегодня? ✨</h2>
            <div className={styles.container}>
                {MOOD_OPTIONS.map((mood) => (
                    <Button
                        key={mood.id}
                        variant="secondary"
                        onClick={() => onSelectMood(mood.id)}
                    >
                        {mood.emoji} {mood.label}
                    </Button>
                ))}
            </div>
        </Card>
    );
};