import styles from './Selector.module.scss';
import { Listbox } from '@headlessui/react';
import { EColor, Typography } from '../Typography';
import { ArrowIcon } from '../../icons/Arrow';

export interface Selected {
  id: number | string;
  name: string;
  unavailable?: boolean;
}

type Props<T> = {
  placeholder: string;
  className?: string;
  onChange: (e: T) => void;
  data?: T[];
  selectedElement?: Selected | null;
  disabled?: boolean;
};

export const Selector = <T extends Selected>({
  placeholder = 'Выбрать',
  className,
  data,
  onChange,
  selectedElement,
  disabled = false,
}: Props<T>) => {
  return (
    <Listbox value={selectedElement} onChange={onChange} disabled={disabled}>
      <div className={`${styles.selector} ${className}`}>
        <Listbox.Button className={styles.selector_button}>
          <Typography As="p" size={16} font="montserrat" color={EColor.white}>
            {selectedElement ? (selectedElement as { name: string }).name : placeholder}
          </Typography>
          <ArrowIcon style={{ transform: `rotate(90deg)` }} />
        </Listbox.Button>
        <Listbox.Options className={styles.selector_options}>
          {data &&
            data.map((person) => (
              <Listbox.Option key={person.id} value={person} disabled={person.unavailable}>
                <Typography As='p' size={16} font="montserrat" color={EColor.blue}>
                  {person.name}
                </Typography>
              </Listbox.Option>
            ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
