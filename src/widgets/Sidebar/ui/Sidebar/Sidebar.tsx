import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import CollapseLight from 'shared/assets/icons/collapseLight.svg';
import CollapseDark from 'shared/assets/icons/collapseDark.svg';
import ExpandLight from 'shared/assets/icons/expandLight.svg';
import ExpandDark from 'shared/assets/icons/expandDark.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/calendar.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const iconCondition = (() => {
        if (collapsed) {
            if (theme === Theme.LIGHT) return <ExpandLight />;
            if (theme === Theme.DARK) return <ExpandDark />;
        } else {
            if (theme === Theme.LIGHT) return <CollapseLight />;
            if (theme === Theme.DARK) return <CollapseDark />;
        }
        return <CollapseLight />;
    })();

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <HomeIcon className={cls.iconStroke} />
                    <span className={cls.link}>{t('Home')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.iconFill} />
                    <span className={cls.link}>{t('About')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.switcher} />
                <Button
                    data-testid="sidebar-toggle"
                    className={cls.switcher}
                    onClick={onToggle}
                    theme={ButtonTheme.CLEAR}
                >
                    {iconCondition}
                </Button>
            </div>
        </div>
    );
};
