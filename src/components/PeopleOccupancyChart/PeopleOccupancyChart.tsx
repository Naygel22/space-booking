import * as echarts from 'echarts/core';
import {
  CalendarComponent,
  CalendarComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import {
  ScatterChart,
  ScatterSeriesOption,
  PieChart,
  PieSeriesOption
} from 'echarts/charts';
import { UniversalTransition, LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect } from 'react';

echarts.use([
  CalendarComponent,
  TooltipComponent,
  LegendComponent,
  ScatterChart,
  PieChart,
  CanvasRenderer,
  UniversalTransition,
  LabelLayout
]);

type EChartsOption = echarts.ComposeOption<
  | CalendarComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | ScatterSeriesOption
  | PieSeriesOption
>;

function getDatesForMonth(firstDayOfMonth: string, firstDayOfNextMonth: string) {
  const date = +echarts.time.parse(firstDayOfMonth);
  const end = +echarts.time.parse(firstDayOfNextMonth);
  const dayTime = 3600 * 24 * 1000;
  const data: string[] = [];
  for (let time = date; time < end; time += dayTime) {
    data.push(
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
    );
  }
  return data;
}

export const PeopleOccupancyChart = () => {

  const cellSize = [80, 80];
  const pieRadius = 30;


  const datesInMonth = getDatesForMonth('2017-02-01', '2017-03-01');
  console.log(datesInMonth)
  const pieSeries = datesInMonth.map(function (item, index) {
    return {
      type: 'pie',
      id: 'pie-' + index,
      center: item,
      radius: pieRadius,
      coordinateSystem: 'calendar',
      label: {
        formatter: '{c}',
        position: 'inside'
      },
      //TODO: call to API
      // rezerwacje dla dnia
      // wolne dla dnia
      data: [
        { name: 'Free', value: Math.round(Math.random() * 24) },
        { name: 'Occupied', value: Math.round(Math.random() * 24) }
      ]
    };
  });

  const option = {
    tooltip: {},
    legend: {
      data: ['Free', 'Occupied'],
      bottom: 20
    },
    calendar: {
      top: 'middle',
      left: 'center',
      orient: 'vertical',
      cellSize: cellSize,
      yearLabel: {
        show: false,
        fontSize: 30
      },
      dayLabel: {
        margin: 20,
        firstDay: 1,
        nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      monthLabel: {
        show: false
      },
      range: ['2017-02']
    },
    series: [
      {
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 0,
        label: {
          show: true,
          formatter: function (params: any) {
            return echarts.time.format(params.value[0], '{dd}', false);
          },
          offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
          fontSize: 14
        },
        data: datesInMonth
      },
      ...pieSeries
    ]
  };

  useEffect(() => {
    const chartDom = document.getElementById('chartPie')!;
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
  }, [])

  return <div id="chartPie" style={{ width: "500px", height: "500px" }}></div>
}
