import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";



import './OverviewChart.css'



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
    maintainAspectRatio:false,
    plugins:{legend:{display:false}},
    layout: {
      padding: {
          left: 150,
          right:90,
      }
  },
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


const OverviewChart = () => {
  return (
    <div className='line-container'>
        <div> <Line data={data} options={options} /></div>
    </div>
  )
}

export default OverviewChart