import styles from './GraphicTooltip.module.scss';

export const GraphicTooltip = ({ active, payload, subTitle }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        {payload[0].payload.name}
        {payload.map((item: any) => (
          <div> {item.value} {subTitle ? subTitle : ''}</div>
        ))}
      </div>
    );
  }
};
