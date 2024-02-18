import { Legend, ResponsiveContainer, Tooltip, Treemap as TreemapLib } from 'recharts';
import styles from './Treemap.module.scss';
import { CustomContent } from './ui/CustomContent';
import { GraphicTooltip } from '../ui/GraphicTooltip';

export const Treemap = ({ data }: { data: { name: string; uv: number }[] }) => {
  const treeMapData = data.sort((a, b) => b.uv - a.uv);

  return (
    <ResponsiveContainer className={styles.graphic} width="100%" height="100%">
      <TreemapLib
        width={400}
        height={320}
        data={treeMapData}
        dataKey="uv"
        aspectRatio={4}
        stroke="#fff"
        fill="#8884d8"
        isAnimationActive={false}
        content={<CustomContent />}
      >
        <Tooltip cursor={false} content={<GraphicTooltip />} />
        <Legend />
      </TreemapLib>
    </ResponsiveContainer>
  );
};
