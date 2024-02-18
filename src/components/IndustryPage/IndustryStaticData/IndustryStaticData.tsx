import { DisclosurePanel } from '@/components/shared/ui/Disclosure';
import styles from './IndustryStaticData.module.scss';
import { RevenueCart } from '@/components/shared/ui/RevenueCart';
import { EColor, Typography } from '@/components/shared/ui/Typography';

export const IndustryStaticData = () => {
  return (
  <DisclosurePanel title='Показатели мониторинга'>
      <div className={styles.data}>
      <div className={styles.data_header}>
        <RevenueCart className={styles.cart}>
          <Typography size={24} font="nunito" color={EColor.blue}>
            60,6%
          </Typography>
          <Typography size={16} font="montserrat" color={EColor.blue}>
            Доля в объемах выручки ПК
          </Typography>
        </RevenueCart>
        <RevenueCart>
          <Typography size={24} font="nunito" color={EColor.blue}>
            12,6%
          </Typography>
          <Typography size={16} font="montserrat" color={EColor.blue}>
            Доля в численности занятых ПК
          </Typography>
        </RevenueCart>
        <RevenueCart>
          <Typography size={24} font="nunito" color={EColor.blue}>
            6,0%
          </Typography>
          <Typography size={16} font="montserrat" color={EColor.blue}>
            Доля в объемах экспорта ВТП ПК
          </Typography>
        </RevenueCart>
        <RevenueCart>
          <Typography size={24} font="nunito" color={EColor.blue}>
            35
          </Typography>
          <Typography size={16} font="montserrat" color={EColor.blue}>
            Число стран для экспорта ВТП ПК
          </Typography>
        </RevenueCart>
      </div>
      <div className={styles.data_footer}>
        <RevenueCart className={styles.cart_flex}>
          <Typography size={24} font="nunito" color={EColor.blue}>
            N
          </Typography>
          <Typography size={16} font="montserrat" color={EColor.blue}>
            Объемы налоговых отчислений в бюджеты всех уровней
          </Typography>
        </RevenueCart>
        <RevenueCart className={styles.cart_flex}>
          <Typography size={24} font="nunito" color={EColor.blue}>
            N
          </Typography>
          <Typography size={16} font="montserrat" color={EColor.blue}>
            Количество предприятий, включенных в межрегиональные кластеры
          </Typography>
        </RevenueCart>
        <RevenueCart className={styles.cart_flex}>
          <Typography size={24} font="nunito" color={EColor.blue}>
            N
          </Typography>
          <Typography size={16} font="montserrat" color={EColor.blue}>
          Объем производства наукоемких импортозамещающих изделий
          </Typography>
        </RevenueCart>
        <RevenueCart className={styles.cart_flex}>
          <Typography size={24} font="nunito" color={EColor.blue}>
            N
          </Typography>
          <Typography size={16} font="montserrat" color={EColor.blue}>
          Объем выпуска продукции в региональных промышленных кластерах
          </Typography>
        </RevenueCart>
      </div>
    </div>
  </DisclosurePanel>
  );
};
