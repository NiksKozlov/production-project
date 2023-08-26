import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Counter } from 'entities/Counter';
import { Counter } from '../../../entities/Counter/ui/Counter';

const MainPage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('Home')}
            <Counter />
        </div>
    );
};

export default MainPage;
