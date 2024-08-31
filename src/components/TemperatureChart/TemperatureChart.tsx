import { Box, Button, Typography } from "@mui/material";
import ReactECharts from 'echarts-for-react';
import { styles } from "./TemperatureChart.styles";
import { BsArrowLeftRight } from "react-icons/bs";
import { useTemperatureContext } from "../../context/TemperatureContext";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { getTemperatureChartConfig } from "./temperatureChartConfig";

export const TemperatureChart = () => {
  const { temperature, increaseTemperature, decreaseTemperature } = useTemperatureContext();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1200));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down(900));

  const option = getTemperatureChartConfig(temperature, isSmallMobile);

  return (
    <Box sx={styles(isMobile).chartContainer}>
      <Typography sx={styles(isMobile).title}>Temperature controller in the office</Typography>
      <ReactECharts option={option} style={styles(isMobile, isSmallMobile).chart as React.CSSProperties} />
      <Box sx={styles(isMobile, isSmallMobile).buttons}>
        <Button onClick={decreaseTemperature} sx={styles(isMobile).minusButton}>-1 °C</Button>
        <BsArrowLeftRight style={styles(isMobile).arrowsIcon as React.CSSProperties} />
        <Button onClick={increaseTemperature} sx={styles(isMobile).plusButton}>+1 °C</Button>
      </Box>
    </Box>
  );
};
