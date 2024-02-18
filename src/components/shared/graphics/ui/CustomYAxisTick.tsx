import { COLORS } from '@/constants/colors';
import { YAxisProps } from 'recharts';

type Props = {
  payload?: {
    value: string;
  };
} & YAxisProps;

export const CustomYAxisTick = ({ y, payload }: Props) => {
  if (!payload) return;
  const textSplit = payload.value.slice(0, 33) + '...';

  return (
    <g transform={`translate(${0},${y})`}>
      <text fontFamily='Montserrat' x={0} y={5} fill={COLORS.blue[0]} textAnchor='start'>
        {payload.value.length > 34 ? textSplit : payload?.value}
      </text>
      <title>{payload?.value}</title>
    </g>
  );
};
