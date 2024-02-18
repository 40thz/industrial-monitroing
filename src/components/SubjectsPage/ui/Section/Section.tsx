import { EColor, Typography } from '@/components/shared/ui/Typography';
import styles from './Section.module.scss';
import { PropsWithChildren } from 'react';

type Props = {
  header?: string;
  reverse?: boolean;
} & PropsWithChildren;

export const Section = ({ children, header, reverse = false }: Props) => {
  return (
    <section className={styles.section}>
      {header && (
        <Typography size={32} font="nunito" color={EColor.blue}>
          {header}
        </Typography>
      )}
      <div className={`${styles.section_inner} ${reverse && styles.reverse}`}>{children}</div>
    </section>
  );
};
