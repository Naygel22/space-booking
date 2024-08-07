import { Box, Button, Typography } from "@mui/material";
import ReactECharts from 'echarts-for-react';
import { styles } from "./TemperatureChart.styles";
import { BsArrowLeftRight } from "react-icons/bs";
import { useTemperatureContext } from "../context/TemperatureContext";

export const TemperatureChart = () => {
  const { temperature, increaseTemperature, decreaseTemperature } = useTemperatureContext();

  const option = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 30,
        splitNumber: 15,
        itemStyle: {
          color: '#FFAB91'
        },
        progress: {
          show: true,
          width: 30
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 30
          }
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        axisLabel: {
          distance: -20,
          color: '#999',
          fontSize: 20
        },
        anchor: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '45%'],
          fontSize: 60,
          fontWeight: 'bolder',
          formatter: '{value} °C',
          color: 'inherit'
        },
        data: [
          {
            value: temperature
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 30,
        itemStyle: {
          color: '#FD7347'
        },
        progress: {
          show: true,
          width: 8
        },
        pointer: {
          show: true
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: temperature
          }
        ]
      }
    ]
  };

  return (
    <Box sx={styles.chartContainer}>
      <Typography sx={styles.title}>Temperature controller in the office</Typography>
      <ReactECharts option={option} style={styles.chart as React.CSSProperties} />
      <Box sx={styles.buttons}>
        <Button onClick={decreaseTemperature} sx={styles.minusButton}>-1 °C</Button>
        <BsArrowLeftRight style={styles.arrowsIcon as React.CSSProperties} />
        <Button onClick={increaseTemperature} sx={styles.plusButton}>+1 °C</Button>
      </Box>
    </Box>
  );
};
