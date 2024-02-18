import React from 'react';
import { EColor, Typography } from '../../Typography';
import styles from './Tab.module.scss';
import cn from 'classnames';

type Props = {
  active: boolean;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Tab = ({ active, ...props }: Props) => {
  return (
    <button {...props} className={cn(styles.tab, { [styles.active]: active })}>
      <Typography size={24} font="montserrat" color={EColor.white}>
        {props.children}
      </Typography>
    </button>
  );
};
