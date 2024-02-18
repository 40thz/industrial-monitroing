import styles from './MonitroingSection.module.scss';
import { EColor, Typography } from '@/components/shared/ui/Typography';
import { PropsWithChildren } from 'react';

type Props = {
  header: {
    level?: string;
    type: string;
    year?: number | string;
  };
} & PropsWithChildren;

export const MonitroingSection = ({ header, children }: Props) => {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <Typography size={40} color={EColor.blue} font="nunito" bold>
          {header.type}
        </Typography>
        {/* <div className={styles.header_inner}>
          {header.level && (
            <Typography size={32} color={EColor.blue} font="nunito">
              {header.level}
            </Typography>
          )}
          {header.year && (
            <Typography size={32} color={EColor.blue} font="nunito">
              {header.year}
            </Typography>
          )}
        </div> */}
      </div>
      <div className={styles.main_inner}>{children}</div>
    </section>
  );
};
