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
        borderColor: ['#FFF', '#FFF', '#FFF', '#FFF'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
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
      <h2>Traffic by Location</h2>
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default Piechart
