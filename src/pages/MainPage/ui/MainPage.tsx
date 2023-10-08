import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';
import { Counter } from '../../../entities/Counter/ui/Counter';

const MainPage = () => {
    const { t } = useTranslation('home');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Home')}
            <Input
                placeholder="Введите текст"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
