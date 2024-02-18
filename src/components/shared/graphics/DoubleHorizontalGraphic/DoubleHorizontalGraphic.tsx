import { Bar, BarChart, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CustomYAxisTick } from '../ui/CustomYAxisTick';
import { CustomXAxisTick } from '../ui/CustomXAxisTick';
import { GraphicProps, GraphicSettings } from '../types';
import { GraphicWrapper } from '../ui/GraphicWrapper';
import { COLORS, GRAPHIC_COLORS } from '@/constants/colors';
import { GraphicTooltip } from '../ui/GraphicTooltip';
import { LegendGraphic } from '../ui/LegendGraphic';

export const DoubleHorizontalGraphic = ({ data }: GraphicProps) => {
  const dataLength = Object.keys(data.graphic[0]).length - 1;
  const height = GraphicSettings.BAR_SIZE * dataLength * data.graphic.length;
  const dataKeys = Object.keys(data.graphic[0]);
  dataKeys.shift();

  return (
    <GraphicWrapper height={height} title={data.title}>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            height={height}
            data={data.graphic}
            margin={{
              left: 0,
            }}
          >
            <XAxis axisLine={false} tickLine={false} type="number" tick={<CustomXAxisTick />} />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={<CustomYAxisTick />}
              label={{ position: 'left' }}
              width={350}
              type="category"
              dataKey="name"
            />

            {dataKeys.map((item, i) => (
              <Bar
                key={item}
                background={{ fill: COLORS.blue[4], radius: 4 }}
                radius={4}
                barSize={20}
                dataKey={item}
                fill={GRAPHIC_COLORS[i]}
              >
                <LabelList fontSize={14} dataKey={item} position="insideRight" fill="white" x={-20} />
              </Bar>
            ))}

            <Tooltip cursor={false} content={<GraphicTooltip />}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {data.legend && <LegendGraphic data={data.legend} />}
    </GraphicWrapper>
  );
};
