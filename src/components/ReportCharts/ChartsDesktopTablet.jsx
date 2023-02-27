import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  CartesianAxis,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const CustomBar = ({ fill, active, ...props }) => {
  const fillColor = active ? 'red' : fill;
  return <Bar fill={fillColor} {...props} />;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export const ChartsDesktopTablet = ({ data }) => {
  return data.length === 0 ? (
    <div>
      You haven't selected any of the categories. For detailed information,
      click on one of them.
    </div>
  ) : (
    <ResponsiveContainer width="100%" height={430}>
      <BarChart
        width={704}
        height={422}
        maxBarSize={40}
        barCategoryGap="1%"
        data={data}
        margin={{ top: 30, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid vertical={false} />
        <CartesianAxis width={100} height={10} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="description"
          tick={{
            fill: '#52555F',
            fontFamily: 'Roboto',
            fontSize: 12,
            fontWeight: 400,
          }}
        />
        <Tooltip
          contentStyle={{ backgroundColor: '#fff' }}
          cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
          content={CustomTooltip}
        />
        <Bar
          dataKey="sum"
          // fill="#FF751D"
          minPointSize={5}
          radius={[10, 10, 0, 0]}
          barSize={38}
          shape={CustomBar}
        >
          <LabelList
            dataKey="sum"
            offset={2}
            position="top"
            formatter={value => `${value} UAH`}
            fill="#52555F"
            fontSize={12}
            fontWeight={400}
            fontFamily="Roboto"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
