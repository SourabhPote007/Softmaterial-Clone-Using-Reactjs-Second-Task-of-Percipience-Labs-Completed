import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';

const GaugeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Set the chart options
    const options = {
      series: [
        {
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: 50, name: 'Completion' }],
        },
      ],
    };

    // Set chart options and render the chart
    chart.setOption(options);

    // Cleanup the chart when the component unmounts
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
};

export default GaugeChart;
