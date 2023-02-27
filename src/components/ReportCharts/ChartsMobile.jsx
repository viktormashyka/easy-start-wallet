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

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{payload[0].payload.transactionsType === 'expenses' ? `YOU SPENT ${payload[0].value} UAH FOR ${payload[0].payload.description}` : `YOU GOT ${payload[0].value} UAH FROM ${payload[0].payload.description}`}</p>
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
  return data.length === 0 ? (
    <div>
      You haven't selected any of the categories. For detailed information,
      click on one of them.
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart
        width={280}
        data={data}
        layout="vertical"
        barCategoryGap="10%"
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
          contentStyle={{ backgroundColor: '#fff' }}
          cursor={{ fill: '#FFDAC0' }}
          content={CustomTooltip}
          position='top'
          offset={-30}
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
