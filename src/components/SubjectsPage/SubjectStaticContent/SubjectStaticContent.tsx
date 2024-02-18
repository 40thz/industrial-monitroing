import { RevenueCart } from '@/components/shared/ui/RevenueCart';
import styles from './SubjectStaticContent.module.scss';
import { EColor, Typography } from '@/components/shared/ui/Typography';
import { memo } from 'react';

export const SubjectStaticContent = memo(() => {
  return (
    <div className={styles.carts}>
      <RevenueCart className={styles.cart}>
        <Typography size={24} font="nunito" color={EColor.blue}>
          N
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Объем инвестиций в основной капитал резидентов индустриальных парков, промышленных технопарков и ТОР
        </Typography>
      </RevenueCart>
      <RevenueCart className={styles.cart}>
        <Typography size={24} font="nunito" color={EColor.blue}>
          N
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Доля высокотехнологичных и средне технологичных отраслей в объеме промышленного производства
        </Typography>
      </RevenueCart>
      <RevenueCart className={styles.cart}>
        <Typography size={24} font="nunito" color={EColor.blue}>
          N
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Удельный вес инновационных товаров, работ, услуг в общем объеме отгруженных товаров, выполненных работ, услуг
        </Typography>
      </RevenueCart>
      <RevenueCart className={styles.cart}>
        <Typography size={24} font="nunito" color={EColor.blue}>
          N
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Количество технопарков (участников-резидентов) и индустриальных парков в реги-оне (ОЭЗ и ТОР)
        </Typography>
      </RevenueCart>
      <RevenueCart className={styles.cart}>
        <Typography size={24} font="nunito" color={EColor.blue}>
          N
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Количество резидентов индустриальных пар-ков, промышленных технопарков и ТОР
        </Typography>
      </RevenueCart>
      <RevenueCart className={styles.cart}>
        <Typography size={24} font="nunito" color={EColor.blue}>
          N
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Число высокопроизводительных рабочих мест в технопарках и индустриальных парках реги-она (ОЭЗ и ТОР)
        </Typography>
      </RevenueCart>
      <RevenueCart className={styles.cart}>
        <Typography size={24} font="nunito" color={EColor.blue}>
          N
        </Typography>
        <Typography size={16} font="montserrat" color={EColor.blue}>
          Объем промышленной продукции произведенной участниками технопарков и индустриальных парков (ОЭЗ и ТОР)
        </Typography>
      </RevenueCart>
    </div>
  );
});
