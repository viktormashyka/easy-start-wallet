import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  YAxis,
  Tooltip,
} from 'recharts';
import { PM } from './ReportCharts.styled'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (<div>
      <PM type={payload[0].payload.transactionsType}>{payload[0].payload.transactionsType === 'expenses' ? `YOU SPENT ${payload[0].value} UAH FOR ${payload[0].payload.description}` : `YOU GOT ${payload[0].value} UAH FROM ${payload[0].payload.description}`}</PM>
    </div>
    );
  }
  return null;
}

const descriptionsLabels = ({ y, x, value }) => {

  return (
    <g>
      <text
        y={y - 3}
        x={x + 3}
        fill="#52555F"
        fontSize={10}
        fontWeight={400}
        fontFamily="Roboto"
      >
        {value}
      </text>
    </g>
  );
};
export const ChartsMobile = ({ data }) => {
  return data.length === 0 ? null : (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        width={280}
        data={data}
        layout="vertical"
        barCategoryGap="1%"
        margin={{
          top: 5,
          right: 15,
          bottom: 5,
          left: 1,
        }}
      >
        <XAxis type="number" axisLine={false} tick={false} />
        <YAxis type="category" axisLine={false} tickLine={false} tick={false} />
        <CartesianGrid vertical={false} horizontal={false} />
        <Tooltip
          cursor={{ fill: 'rgba(255, 117, 29, 0.05)' }}
          content={CustomTooltip}
          position='top'

        />
        <Bar
          dataKey="sum"
          fill="#FF751D"
          minPointSize={0}
          radius={[0, 10, 10, 0]}
          barSize={15}
        >
          {' '}
          <LabelList
            dataKey="description"
            content={descriptionsLabels}
            position="insideTopLeft"
          />
          <LabelList
            dataKey="sum"
            position="insideTopRight"
            offset={-10}
            formatter={value => `${value} UAH`}
            fill="#52555F"
            fontSize={10}
            fontWeight={400}
            fontFamily="Roboto"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
