import { Treemap } from '@/components/shared/graphics/TreeMap';
import styles from './SecondRegionDataSection.module.scss';
import { useContext } from 'react';
import { RegionContext } from '../RegionContext/RegionContext';

export const SecondRegionDataSection = () => {
  const { data } = useContext(RegionContext);

  const treeMapData = data.map((item) => {
    return {
      name: item.name,
      uv: parseInt((item.size as number).toFixed(1)),
    };
  });

  treeMapData.shift();

  return (
    <div className={styles.main}>
      <Treemap data={treeMapData.filter((item) => item.uv > 1)} />
    </div>
  );
};
