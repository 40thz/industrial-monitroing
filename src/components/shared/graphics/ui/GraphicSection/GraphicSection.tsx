import React from 'react';
import styles from './GraphicSection.module.scss';

export const GraphicSection = ({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div {...props} className={`${styles.section} ${className}`}>
      {props.children}
    </div>
  );
};
