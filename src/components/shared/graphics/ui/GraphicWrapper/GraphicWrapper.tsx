import { PropsWithChildren } from 'react';
import styles from './GraphicWrapper.module.scss';
import { EColor, Typography } from '@/components/shared/ui/Typography';

type Props = {
  title?: string;
  height: number;
} & PropsWithChildren;

export const GraphicWrapper = ({ children, title, height }: Props) => {
  return (
    <div className={styles.graphic}>
      {title && (
        <Typography size={20} font="montserrat" color={EColor.blue}>
          {title}
        </Typography>
      )}
      <div className={styles.graphic_body} style={{ minHeight: height }}>
        {children}
      </div>
    </div>
  );
};
