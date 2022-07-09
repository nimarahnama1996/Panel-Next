import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";



import './LineChart.css'




const data = {
    labels: ['22:30:30','22:30:32','22:30:34','22:30:36','22:30:38','22:30:40','22:30:42','22:30:44','22:30:46','22:30:48','22:30:50','22:30:52'],
    datasets: [
      {
        label: 'Iphone sales',
        data: [150,190,200,160,210,180,230,200,160,200,170,190],
        fill: false,
        pointBorderColor:"blue",
        pointBorderWidth:5,
        borderColor:'blue',
        pointRadius:3,
        tension: 0.6,
      },
    ],
  };
  
  const options = {
    plugins:{legend:{display:false}},
    aspectRatio:10,
    scales: {
      y:{
        ticks:{
          color:"white",
          font:{
            size:14
          }
        },
      },
      
      x:{
        ticks:{
          color:"white",
          font:{
            size:14
          }
        }
      }
    },
  };

const LineChart = () => {
  
  return (
    <div className='chart-line'>
        <h2 >Requests per second</h2>
      
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart