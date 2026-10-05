import { useState } from 'react';
import { Card } from '@/shared/ui/card';
import type { DateOption } from '@/entities/date-option';
import { MoodStep } from '@/widgets/mood-step';
import { InviteStep } from '@/widgets/invite-step';
import { CatalogStep } from '@/widgets/catalog-step';
import { ScheduleStep } from '@/widgets/schedule-step';
import { Confetti } from '@/features/confetti-effect';
import { sendTelegramNotification } from '@/features/send-telegram-notification';

import styles from './InvitePage.module.css';

type Step = 'mood' | 'invite' | 'catalog' | 'schedule' | 'success';

export const InvitePage = () => {
    const [step, setStep] = useState<Step>('mood');
    const [userMood, setUserMood] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<DateOption | null>(null);
    const handleScheduleConfirm = async (when: string) => {
        setStep('success');

        Confetti();

        const message = `🎉 Она согласилась на свидание!\n\n` +
            `😊 Настроение: ${userMood}\n` +
            `📍 Формат: ${selectedOption?.emoji} ${selectedOption?.title}\n` +
            `⏰ Когда: ${when}`;

        await sendTelegramNotification(message);
    };

    return (
        <div className={styles.page}>
            {step === 'mood' && (
                <MoodStep
                    onSelectMood={(moodId) => {
                        setUserMood(moodId);
                        setStep('invite');
                    }}
                />
            )}

            {step === 'invite' && (
                <InviteStep onAccept={() => setStep('catalog')} />
            )}

            {step === 'catalog' && (
                <CatalogStep
                    onConfirm={(option) => {
                        setSelectedOption(option);
                        setStep('schedule');
                    }}
                />
            )}

            {step === 'schedule' && (
                <ScheduleStep onConfirm={handleScheduleConfirm} />
            )}

            {step === 'success' && (
                <Card>
                    <h1 className={styles.successTitle}>Ура! Договорились! 🎉❤️</h1>
                    <p className={styles.details}>
                        Формат: <strong>{selectedOption?.emoji} {selectedOption?.title}</strong>
                    </p>
                    <p className={styles.subtext}>Я уже с нетерпением жду нашей встречи!</p>
                </Card>
            )}
        </div>
    );
};