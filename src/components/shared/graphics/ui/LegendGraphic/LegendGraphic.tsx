import { EColor, Typography } from '@/components/shared/ui/Typography';
import styles from './LegendGraphic.module.scss';
import { GraphicProps } from '../../types';
import { GRAPHIC_COLORS } from '@/constants/colors';

export const LegendGraphic = ({ data }: { data: GraphicProps['data']['legend'] }) => {
  if (!data) return;
  
  return (
    <div className={styles.legend}>
      {data.map((item, i) => (
        <div className={styles.legend_item}>
          <div style={{ background: GRAPHIC_COLORS[i] }} className={styles.legend_item_mark}></div>
          <Typography size={16} font="nunito" color={EColor.blue}>
            {item}
          </Typography>
        </div>
      ))}
    </div>
  );
};
