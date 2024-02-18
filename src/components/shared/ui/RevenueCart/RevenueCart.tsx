import React from 'react';
import { EColor, Typography } from '../Typography';
import styles from './RevenueCart.module.scss';
import CountUp from 'react-countup';

type Props = {
  title?: string;
  count?: {
    count?: number | string;
    prefix?: string;
    decimals?: number
  };
  countTag?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const RevenueCart = ({ children, className, title, count = {decimals: 0}, countTag = '', ...props }: Props) => (
  <div {...props} className={`${styles.cart} ${className}`}>
    {children && children}
    {!children && (
      <>
        {title && (
          <Typography size={16} font="montserrat" color={EColor.blue}>
            {title}
          </Typography>
        )}

        <div className={styles.cart_footer}>
          {count?.count && (
            <Typography size={32} font="nunito" color={EColor.blue}>
              <CountUp start={0} decimals={count.decimals} end={count.count as number} suffix={` ${count.prefix}`} />
            </Typography>
          )}
          {!count?.count && !countTag && (
            <Typography size={32} font="nunito" color={EColor.blue}>
              Н/Д
            </Typography>
          )}
          {countTag && (
            <Typography size={12} font="nunito" color={EColor.blue}>
              {countTag}
            </Typography>
          )}
        </div>
      </>
    )}
  </div>
);
