import styles from './Tabs.module.scss';
import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
} & PropsWithChildren;

export const Tabs = ({ className, children }: Props) => {
  return (
    <div className={`${styles.tabs} ${className}`}>
      <div className={styles.tabs_inner}>{children}</div>
    </div>
  );
};
