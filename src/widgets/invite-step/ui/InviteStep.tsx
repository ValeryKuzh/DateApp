import { Card } from '@/shared/ui/card';
import { AnswerButtons } from '@/features/answer-invite';
import styles from './InviteStep.module.css';

interface InviteStepProps {
    onAccept: () => void;
}

export const InviteStep = ({ onAccept }: InviteStepProps) => {
    return (
        <Card>
            <h2 className={styles.title}>Пойдёшь со мной на свидание? 🌹</h2>
            <p className={styles.text}>У меня есть кое-что интересное для нас!</p>
            <AnswerButtons onAccept={onAccept} />
        </Card>
    );
};