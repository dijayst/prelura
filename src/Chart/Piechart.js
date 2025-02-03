import React from 'react'

import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {

  const data = {
    labels: ['London', 'Manchester', 'Wigan', 'Bristol'],
    datasets: [
      {
        data: [52.1, 22.8, 13.9, 11.2],
        backgroundColor: ['#000000', '#92BFFF', '#94E9B8', '#AEC7ED'],
       
        borderWidth: 1,
       
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',  // Position the legend to the right
        labels: {
          boxWidth: 10,   // Adjust the size of the legend color box
          padding: 20,    // Space between the legend and the chart
          font: {
            size: 14,     // Font size for the legend text
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
    
  };

  return (
    <div className='containerpie'>
     
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default Piechart
