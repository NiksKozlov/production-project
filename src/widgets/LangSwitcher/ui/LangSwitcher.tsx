import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import EnLight from 'shared/assets/icons/enLight.svg';
import EnDark from 'shared/assets/icons/enDark.svg';
import RuLight from 'shared/assets/icons/ruLight.svg';
import RuDark from 'shared/assets/icons/ruDark.svg';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation();
    const { theme } = useTheme();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    const langIconCondition = (() => {
        if (i18n.language === 'en') {
            if (theme === Theme.LIGHT) return <EnLight />;
            if (theme === Theme.DARK) return <EnDark />;
        } else {
            if (theme === Theme.LIGHT) return <RuLight />;
            if (theme === Theme.DARK) return <RuDark />;
        }
        return EnLight;
    })();

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {langIconCondition}
        </Button>
    );
};
