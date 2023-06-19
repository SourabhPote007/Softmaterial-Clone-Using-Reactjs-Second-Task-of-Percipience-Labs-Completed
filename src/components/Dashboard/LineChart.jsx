import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const ChartTwo = () => {
    const [data, setData] = useState({
        // labels : ["Jan","Feb","April","May","June","July","August","September","Oct","Nov","Dec"],
        labels: ["2010","2011","2012","2013","2014","2015","2016"],

        datasets: [
            {
                label: 'Search',
                data: [90,190,90,60,80,110,80],
                // backgroundColor:'#ff4961',
                borderColor: "red",
                borderWidth: "1",
                tension: 0.4,
                // pointStyle: false,
                // pointWidth: "0",
                indexAxis: false
                // label:false
                // showLine:false
                // color:'#ff4961'
            },
            {
                label: 'Social',
                data: [20,80,70,140,140,80,200],
                // backgroundColor:'#ff4961',
                borderColor: "orange",
                borderWidth: "1",
                tension: 0.4,
                // pointStyle: false,
                // pointWidth: "0",
                indexAxis: false
                // label:false
                // showLine:false
                // color:'#ff4961'
            },
            {
                label: 'Referrals',
                data: [80,100,60,200,150,100,150],
                // backgroundColor:'#ff4961',
                borderColor: "purple",
                borderWidth: "1",
                tension: 0.4,
                // pointStyle: false,
                // pointWidth: "0",
                indexAxis: false
                // label:false
                // showLine:false
                // color:'#ff4961'
            },
            {
                label: 'Direct',
                data: [50,130,80,70,180,105,250],
                // backgroundColor:'#ff4961',
                borderColor: "purple",
                borderWidth: "1",
                tension: 0.4,
                // pointStyle: false,
                // pointWidth: "0",
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
            x:{
                grid:{
                    display:false
                }
            },
            y:{
                grid:{
                    display:false
                }
            }
        }
    };
    return (
        <Line data={data} options={options} />
    )
}

export default ChartTwo;
