import { EColor, Typography } from '@/components/shared/ui/Typography';
import styles from './FirstRegionDataSection.module.scss';
import { RevenueCart } from '@/components/shared/ui/RevenueCart';
import { useContext } from 'react';
import { RegionContext } from '../RegionContext/RegionContext';

export const FirstRegionDataSection = () => {
  const { data } = useContext(RegionContext);

  const region = data[0];
  return (
    <div className={styles.main}>
      <Typography size={32} font="nunito" color={EColor.blue}>
        {region.name} (характерстики ПК)
      </Typography>
      <div className={styles.main_inner}>
        {/* <RevenueCart title="Население" count={region.audience} /> */}
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
      </div>
    </div>
  );
};
