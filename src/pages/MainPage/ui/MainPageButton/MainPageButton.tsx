import { EColor, Typography } from '@/components/shared/ui/Typography';
import styles from './MainPageButton.module.scss';
import { PropsWithChildren } from 'react';
import { Button } from '@/components/shared/ui/Button';
import { Link } from 'react-router-dom';

type Props = {
  icon: React.ReactNode;
  href: string;
} & PropsWithChildren;

export const MainPageButton = ({ icon, href, children }: Props) => {
  return (
    <div className={styles.button}>
      <div className={styles.button_inner}>
        <div className={styles.icon}>{icon}</div>
        <Typography size={24} font="nunito" color={EColor.white}>
          {children}
        </Typography>
      </div>
      <Link to={href}>
        <Button>Открыть</Button>
      </Link>
    </div>
  );
};
