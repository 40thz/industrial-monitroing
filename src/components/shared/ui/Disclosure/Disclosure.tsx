// import { EColor, Typography } from "@/components/shared/ui/Typography";
import { ArrowIcon } from '@/components/shared/icons/Arrow';
import styles from './Disclosure.module.scss';
import { Disclosure } from '@headlessui/react';
import { EColor, TSizes, Typography } from '@/components/shared/ui/Typography';
import { PropsWithChildren } from 'react';

export type DisclosurePanelProps = {
  title: string;
  size?: TSizes;
  col?: 1 | 2;
  className?: string;
  classNamePanel?: string;
  classNameBtn?: string;
  isOpen?: boolean;
  color?: string;
  href?: string | null;
  btnHandler?: (value: boolean) => void;
} & PropsWithChildren;

export const DisclosurePanel = ({
  title,
  children,
  size = 24,
  col = 1,
  className,
  classNamePanel,
  classNameBtn,
  isOpen = false,
  color,

  btnHandler,
}: DisclosurePanelProps) => {
  switch (col) {
    case 1:
      return (
        <Disclosure defaultOpen={isOpen}>
          {({ open }) => (
            <div onClick={() => btnHandler && btnHandler(open)} className={`${styles.disclosure} ${className}`}>
              <Disclosure.Button className={`${styles.button} ${classNameBtn} ${open && styles.active}`}>
                <Typography As="h1" size={size} font="nunito" color={open ? EColor.white : EColor.blue}>
                  {title}
                </Typography>
                <ArrowIcon style={{ transform: `rotate(${open ? '-90deg' : '90deg'})` }} />
              </Disclosure.Button>
              <Disclosure.Panel className={`${styles.panel} ${classNamePanel}`}>{children}</Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      );
    case 2:
      return (
        <div className={styles.col2}>
          <div className={styles.col2_inner} style={{ background: color }}></div>
          <Disclosure>
            {({ open }) => (
              <div className={styles.disclosure}>
                <Disclosure.Button className={`${styles.button} ${classNameBtn}`}>
                  <Typography As="h1" size={size} font="nunito" color={EColor.blue}>
                    {title}
                  </Typography>
                  {/* {href && open && (
                    <Link onClick={() => close()} to={`/region/${href}`}>
                      <Typography size={16} font="montserrat" color={EColor.blue}>
                        Подробнее
                      </Typography>
                    </Link>
                  )} */}
                  <ArrowIcon
                    style={{
                      transform: `rotate(${open ? '-90deg' : '90deg'})`,
                    }}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className={`${styles.panel} ${classNamePanel}`}>{children}</Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      );
  }
};
