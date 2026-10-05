import { useState } from 'react';
import { Card } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';
import type { DateOption } from '@/entities/date-option';
import { DateOptionCard } from '@/entities/date-option';
import { CATALOG_OPTIONS } from '../model/constants';
import styles from './CatalogStep.module.css';

interface CatalogStepProps {
    onConfirm: (selectedOption: DateOption) => void;
}

export const CatalogStep = ({ onConfirm }: CatalogStepProps) => {
    const [selectedId, setSelectedId] = useState<string>(CATALOG_OPTIONS[0].id);

    const handleConfirm = () => {
        const option = CATALOG_OPTIONS.find((o) => o.id === selectedId);
        if (option) onConfirm(option);
    };

    return (
        <Card>
            <h2 className={styles.title}>Куда отправимся? Выбирай:</h2>
            <div className={styles.grid}>
                {CATALOG_OPTIONS.map((opt) => (
                    <DateOptionCard
                        key={opt.id}
                        option={opt}
                        isSelected={opt.id === selectedId}
                        onSelect={setSelectedId}
                    />
                ))}
            </div>
            <Button variant="primary" onClick={handleConfirm}>
                Продолжить ➔
            </Button>
        </Card>
    );
};