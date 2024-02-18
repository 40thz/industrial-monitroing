import { COLORS } from '@/constants/colors';
import { XAxisProps } from 'recharts';

type Props = {
  index?: number;
  payload?: {
    value: string;
  };
} & XAxisProps;

export const CustomXAxisTick = ({ index, x, y, payload }: Props) => {
  if (!payload || index === 0) return;

  return (
    <g>
      <g>
        <line x1={(x as number) + 10} y1={10} x2={(x as number) + 10} y2={y} style={{ stroke: COLORS.blue[0], strokeWidth: 1 }} />
        <text fontSize={12} x={(x as number) - 20} y={(y as number) + 4} textAnchor="start" fill={COLORS.blue[0]}>
          {payload.value}
        </text>
      </g>
    </g>
  );
};
