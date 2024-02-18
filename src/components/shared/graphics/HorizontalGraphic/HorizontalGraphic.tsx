import { Bar, BarChart, ResponsiveContainer, Tooltip, YAxis, XAxis, LabelList } from 'recharts';
import { CustomYAxisTick } from '../ui/CustomYAxisTick';
import { COLORS } from '@/constants/colors';
import { CustomXAxisTick } from '../ui/CustomXAxisTick';
import { GraphicTooltip } from '../ui/GraphicTooltip/GraphicTooltip';
import { GraphicWrapper } from '../ui/GraphicWrapper';
import { GraphicProps, GraphicSettings } from '../types';
import { LegendGraphic } from '../ui/LegendGraphic';

type Props = {
  options?: {
    xAxis?: boolean;
    yAxis?: boolean;
  };
  domainX?: string[] | number[];
  subTitle?: string;
} & GraphicProps;

const CustomBarLabel = ({ x, y, width, value, subTitle }: any) => {
  const isBarWideEnough = width > 70;
  const title = subTitle ? subTitle : '';
  const checkSizeTitle = title.length > 1;
  const offset = checkSizeTitle ? title.length * 11 : 40;

  return (
    <text
      x={isBarWideEnough ? x + width - offset / 2 : x + width - offset / 2 + 105}
      y={y + 4}
      style={{ fontSize: '14px' }}
      fill={isBarWideEnough ? 'white' : COLORS.blue[0]}
      textAnchor="middle"
      dominantBaseline="hanging"
      fontSize={12}
    >
      {value} {title}
    </text>
  );
};

export const HorizontalGraphic = ({ options = { xAxis: true, yAxis: true }, data, domainX, subTitle }: Props) => {
  const height = GraphicSettings.BAR_SIZE * data.graphic.length;
  const dataKeys = Object.keys(data.graphic[0]);
  dataKeys.shift();

  const dataWithSubTitle = data.graphic.map((item) => {
    return {
      ...item,
      subTitle,
    };
  });

  return (
    <GraphicWrapper height={height} title={data.title}>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            margin={{
              left: 0,
            }}
            layout="vertical"
            data={dataWithSubTitle}
          >
            <XAxis
              axisLine={false}
              tickLine={false}
              type="number"
              tick={<CustomXAxisTick />}
              hide={!options?.xAxis}
              domain={domainX}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={<CustomYAxisTick />}
              label={{ position: 'left' }}
              width={data.graphic[0].label ? 460 : 350}
              type="category"
              dataKey="name"
              hide={!options?.yAxis}
            />
            <Bar
              background={{ fill: COLORS.blue[4], radius: 4 }}
              dataKey="uv"
              fill="#4C5DB0"
              radius={4}
              barSize={20}
              label={<CustomBarLabel subTitle={subTitle} />}
            >
              {data.graphic[0].label && (
                <LabelList
                  fontFamily="Inter"
                  fontSize={16}
                  dataKey="label"
                  position="left"
                  fill="#4C5DB0"
                  formatter={(value: string) => `${value} проектов`}
                  width={300}
                />
              )}
            </Bar>
            <Tooltip
              wrapperStyle={{ outline: 'none' }}
              cursor={false}
              content={<GraphicTooltip subTitle={subTitle} />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {data.legend && <LegendGraphic data={data.legend} />}
    </GraphicWrapper>
  );
};
