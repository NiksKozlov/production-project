import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Component for test ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const throwError = () => {
        setError(true);
    };

    return (
        <Button onClick={throwError}>
            {t('throw error')}
        </Button>
    );
};
