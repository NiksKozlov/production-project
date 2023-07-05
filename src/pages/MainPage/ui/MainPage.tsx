import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('Home')}
        </div>
    );
};

export default MainPage;
