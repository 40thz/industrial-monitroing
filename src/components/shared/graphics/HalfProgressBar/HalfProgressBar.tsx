import { checkOrder } from '@/utils/checkOrder';
import { Cell, Label, Pie, PieChart } from 'recharts';

export const HalfProgressBar = ({ percent }: { percent: number }) => {
  const data = [
    {
      value: percent,
      style: { fill: '#4C5DB0', radius: 10 },
    },
    {
      value: 100 - percent,
      style: { fill: '#4C5DB01A', radius: 10 },
    },
  ];

  return (
    <div style={{ width: '350px', height: '170px', overflow: 'hidden' }}>
      <div></div>
      <PieChart height={400} width={450}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          innerRadius={90}
          data={data}
          fill="#8884d8"
          stroke="none"
          cx={160}
          cy={160}
        >
          {data.map((entry, index) => (
            // @ts-ignore
            <Cell cornerRadius={entry.style.radius} key={`cell-${index}`} fill={entry.color} />
          ))}
          <Label
            fontSize={32}
            fill="#4C5DB0"
            value={`${percent} %`}
            position="centerTop"
            style={{ transform: 'translateY(-45px)' }}
          />
          <Label
            value={checkOrder(percent)}
            fill="#4C5DB0"
            position="centerTop"
            style={{ transform: 'translateY(-15px)' }}
          />
        </Pie>
      </PieChart>
    </div>
  );
};
