import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

export const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="treemap-custom-tooltip">
        <p>{`${payload[0].payload.root.name}`}</p>
        <p>{`${payload[0].payload.name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};
