import { DisclosurePanel, DisclosurePanelProps } from '@/components/shared/ui/Disclosure';
import styles from './SubjectDisclosure.module.scss';
import { EColor, Typography } from '@/components/shared/ui/Typography';
import { PropsWithChildren } from 'react';

type Props = {
  header: string;
} & DisclosurePanelProps &
  PropsWithChildren;

export const SubjectDisclosure = ({ header, children, ...props }: Props) => {
  return (
    <div className={styles.disclosure}>
      <Typography size={24} font="nunito" color={EColor.blue}>
        {header}
      </Typography>
      <DisclosurePanel {...props}>
        <div className={styles.body}>{children}</div>
      </DisclosurePanel>
    </div>
  );
};
