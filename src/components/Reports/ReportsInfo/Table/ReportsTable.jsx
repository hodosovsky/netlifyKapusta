import { Container, Card } from './ReportsTable.styled';

import React from 'react';
import { BarChart, Bar, XAxis, Cell } from 'recharts';
import { MobileChartsReport } from './MobileChartsReport';
import useWindowDimensions from 'helpers/useWindowDimensions';

export const ReportsTable = ({ data }) => {
  console.log(data);

  const { width } = useWindowDimensions();
  const SortedData = () => [...data].sort((a, b) => b.sum - a.sum);

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y - 4}
        fill="#52555F"
        textAnchor="middle"
        dy={-10}
      >{`${value} UAN`}</text>
    );
  };

  return width >= 320 ? (
    <Container>
      <Card>
        <BarChart
          width={605}
          height={328}
          data={SortedData}
          margin={{ top: 8, right: 25, bottom: 4, left: 20 }}
          barCategoryGap={20}
        >
          <XAxis
            dataKey="subcategory"
            axisLine={false}
            tickLine={false}
            dy={5}
            domain={['', '']}
          ></XAxis>

          <Bar
            dataKey="sum"
            barSize={38}
            fill="#fd8905"
            label={renderCustomBarLabel}
            radius={[10, 10, 0, 0]}
            animationDuration={1000}
          >
            {data &&
              data.map((el, idx) => (
                <Cell
                  key={`cell-${idx}`}
                  fill={idx % 3 ? '#FFDAC0' : '#ff751d'}
                />
              ))}
          </Bar>
        </BarChart>
      </Card>
    </Container>
  ) : (
    <MobileChartsReport data={SortedData} />
  );
};
