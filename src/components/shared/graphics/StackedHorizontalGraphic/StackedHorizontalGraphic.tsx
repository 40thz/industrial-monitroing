import { Bar, BarChart, ResponsiveContainer, Tooltip, YAxis, XAxis, LabelList } from 'recharts';
import { GraphicWrapper } from '../ui/GraphicWrapper';
import { GraphicProps } from '../types';
import { LegendGraphic } from '../ui/LegendGraphic';
import { GraphicTooltip } from '../ui/GraphicTooltip';

export const StackedHorizontalGraphic = ({ height = 64, data }: { height: number } & GraphicProps) => {
  const dataWithPercent = data.graphic.map((item) => {
    return {
      ...item,
      label: '%',
    };
  });
  return (
    <GraphicWrapper height={height} title={data.title}>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            height={height}
            data={dataWithPercent}
            margin={{
              left: 0,
            }}
          >
            <XAxis axisLine={false} tickLine={false} type="number" hide />
            <YAxis type="category" dataKey="name" hide />
            <Tooltip cursor={false} content={<GraphicTooltip subTitle="%" />} />
            {data.graphic[0].uv && (
              <Bar dataKey="uv" stackId="a" fill="#4C5DB0" radius={[4, 0, 0, 4]}>
                <LabelList
                  fontSize={14}
                  dataKey="uv"
                  position="insideRight"
                  fill="white"
                  x={-70}
                  style={{ transform: 'translateX(-15px)' }}
                />
                <LabelList fontSize={14} dataKey="label" position="insideRight" fill="white" />
              </Bar>
            )}
            {data.graphic[0].pv && (
              <Bar dataKey="pv" stackId="a" fill="#002689" radius={0}>
                <LabelList
                  fontSize={14}
                  dataKey="pv"
                  position="insideRight"
                  fill="white"
                  x={-70}
                  style={{ transform: 'translateX(-15px)' }}
                />
                <LabelList fontSize={14} dataKey="label" position="insideRight" fill="white" />
              </Bar>
            )}
            {data.graphic[0].amt && (
              <Bar dataKey="amt" stackId="a" fill="#5684FC" radius={[0, 4, 4, 0]}>
                <LabelList
                  fontSize={14}
                  dataKey="amt"
                  position="insideRight"
                  fill="white"
                  x={-70}
                  style={{ transform: 'translateX(-15px)' }}
                />
                <LabelList fontSize={14} dataKey="label" position="insideRight" fill="white" />
              </Bar>
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
      {data.legend && <LegendGraphic data={data.legend} />}
    </GraphicWrapper>
  );
};
