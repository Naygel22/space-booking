import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { Box, Typography } from '@mui/material';
import { styles } from './SoundIntensityChart.styles';

const generateRandomValue = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const SoundIntensityChart = () => {
  const [option, setOption] = useState({
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '90%',
        min: 0,
        max: 1,
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            width: 7,
            color: [
              [0.3, '#7CFFB2'],
              [0.5, '#FDDD60'],
              [0.7, '#fc8452'],
              [1, '#FF6E76']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
            color: 'auto'
          }
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto',
            width: 6
          }
        },
        axisLabel: {
          color: 'white',
          fontSize: 17,
          distance: -60,
          rotate: 'tangential',
          formatter: function (value: number) {
            if (value === 0.9) {
              return '0.7 dB +';
            } else if (value === 0.6) {
              return '0.5 - 0.7 dB';
            } else if (value === 0.4) {
              return '0.35 - 0.5 dB';
            } else if (value === 0.1) {
              return '0 - 0.35 dB';
            }
            return '';
          }
        },
        title: {
          offsetCenter: [0, '-10%'],
          fontSize: 20,
          color: 'white'
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '-35%'],
          valueAnimation: true,
          formatter: function (value: number) {
            return Math.round(value * 100) + '';
          },
          color: 'inherit'
        },
        data: [
          {
            value: generateRandomValue(0.25, 0.55),
            name: 'Sound intensity [dB]'
          }
        ]
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOption((prevOption) => ({
        ...prevOption,
        series: [
          {
            ...prevOption.series[0],
            data: [
              {
                ...prevOption.series[0].data[0],
                value: generateRandomValue(0.25, 0.55),
              },
            ],
          },
        ],
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={styles.chartContainer}>
      <Typography sx={styles.title}>Real-time Sound Intensity in the Office</Typography>
      <ReactECharts option={option} style={styles.chart as React.CSSProperties} />
    </Box>

  )
};


