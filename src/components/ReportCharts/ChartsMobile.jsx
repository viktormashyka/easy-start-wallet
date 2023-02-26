import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

export const ChartsMobile = ({ data }) => {
  return data.length === 0 ? (
    <div>
      You haven't selected any of the categories. For detailed information,
      click on one of them.
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={430}>
      <BarChart
        width={280}
        height={422}
        data={data}
        layout="vertical"
        barCategoryGap="1%"
        margin={{
          top: 30,
          right: 30,
          bottom: 5,
          left: 15,
        }}
      >
        <XAxis type="number" axisLine={false} tick={false} />
        <YAxis type="category" axisLine={false} tickLine={false} tick={false} />
        <CartesianGrid vertical={false} horizontal={false} />

        <Bar
          dataKey="sum"
          fill="#FF751D"
          minPointSize={5}
          radius={[0, 10, 10, 0]}
          barSize={15}
        >
          {' '}
          <LabelList
            dataKey="description"
            position="insideTopLeft"
            offset={-15}
            fill="#52555F"
            fontSize={10}
            fontWeight={400}
            fontFamily="Roboto"
          />
          <LabelList
            dataKey="sum"
            position="insideTopRight"
            offset={-15}
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
