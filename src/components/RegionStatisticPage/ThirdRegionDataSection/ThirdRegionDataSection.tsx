import { DisclosurePanel } from '@/components/shared/ui/Disclosure';
import styles from './ThirdRegionDataSection.module.scss';
import { RevenueCart } from '@/components/shared/ui/RevenueCart';

import { COLORS } from '@/constants/colors';
import { useContext } from 'react';
import { RegionContext } from '../RegionContext';

export const ThirdRegionDataSection = () => {
  const { data, industry } = useContext(RegionContext);

  const sliceData = data.slice(1, data.length);

  const sortData = sliceData.sort((a: any, b: any) => b.size - a.size);

  return (
    <div className={styles.main}>
      {sortData.map((region) => (
        <DisclosurePanel
          key={region.id}
          title={region.name}
          col={2}
          classNamePanel={styles.panel}
          color={COLORS.blue[0]}
          href={industry ? region.slug : null}
        >
          <RevenueCart
            title="Объем промышленной продукции, руб."
            count={{
              count: region.square,
              prefix: '',
            }}
          />
          <RevenueCart
            title="Объем налогов в бюджеты всех уровней, руб."
            count={{
              count: region.proceeds,
              prefix: '',
            }}
          />
          <RevenueCart
            title="Численность занятых в пром.комплексе, чел."
            count={{
              count: region.audience,
              prefix: '',
            }}
          />
          <RevenueCart
            title="Объем производства промышленных комплексов по макрорайонам, %"
            count={{
              count: region.size,
              prefix: '%',
              decimals: 1
            }}
          />
        </DisclosurePanel>
      ))}
    </div>
  );
};
