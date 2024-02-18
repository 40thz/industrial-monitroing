import { FC, PropsWithChildren, memo } from 'react';
import { EColor, Typography } from '../../ui/Typography';
import styles from './HeaderView.module.scss';
import { useNavigate } from 'react-router-dom';

export const HeaderView: FC<PropsWithChildren> = memo(({ children }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div onClick={() => navigate(-1)} className={styles.button}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="16" fill="white" />
          <path d="M30 12L18 24L30 36" stroke="#4C5DB0" stroke-width="4" />
        </svg>
      </div>
      <Typography As="h1" size={40} font="nunito" color={EColor.white}>
        {children}
      </Typography>
    </div>
  );
});
