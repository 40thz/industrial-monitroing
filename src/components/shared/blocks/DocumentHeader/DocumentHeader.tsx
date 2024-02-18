import styles from './DocumentHeader.module.scss';
import { HeaderView } from '@/components/shared/blocks/HeaderView/HeaderView';
import { PropsWithChildren } from 'react';

type Props = {
  title?: string;
} & PropsWithChildren;

export const DocumentHeader = ({ children, title }: Props) => (
  <div className={styles.header}>
    {title && <HeaderView>{title}</HeaderView>}
    <div className={styles.header_options}>{children}</div>
  </div>
);
