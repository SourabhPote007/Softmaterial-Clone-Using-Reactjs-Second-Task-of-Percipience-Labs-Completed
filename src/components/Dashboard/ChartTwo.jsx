import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const ChartTwo = () => {
    const [data, setData] = useState({
        // labels : ["Jan","Feb","April","May","June","July","August","September","Oct","Nov","Dec"],
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        datasets: [
            {
                label: "Visits",
                data: [3, 4, 7, 5, 4, 6, 8, 7, 4, 3, 5, 7, 10],
                // backgroundColor:'#ff4961',
                borderColor: "#28d094",
                borderWidth: "5",
                tension: 0.1,
                pointStyle: false,
                pointWidth: "0",
                indexAxis: false
                // label:false
                // showLine:false
                // color:'#ff4961'
            },
        ]
    })

    //   const option = {
    //     plugins: {
    //       tooltip: {
    //         enabled: false, // Disable tooltips
    //       },
    //     },
    //   };

    const options = {
        responsive:true,
        plugins:{
            legend:{
                // position:'top'
                display:false
            },
            title:{
                display:true,
                Text:'Chart.js Line Chart',
                font:{size:25},
            }
        },
        scales: {
            x: {
                // Set display to false to remove x-axis labels
                display: false,
            },
            y: {
                // Set display to false to remove y-axis labels
                display: false,
            },
        },
    };
    return (
        <Line data={data} options={options} />
    )
}

export default ChartTwo;
