import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFromProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFromProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter Username')}
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter Password')}
            />
            <Button className={cls.loginBtn}>
                {t('Sign in')}
            </Button>
        </div>
    );
};
