import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);


function Linechart() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Sales",
            data: [11000, 7000, 15000, 18000, 25000, 18000,20000],
            borderColor: "#000000",
            backgroundColor: "#F9F9FA",
            tension: 0.4,
            pointRadius: 0,
            pointBackgroundColor: "#000000",
            borderWidth:1
          },
          {
            label: "Revenue",
            data: [0, 11000, 11000, 20000, 5000, 15000,22000],
            borderColor: "#00000066",
            backgroundColor: "#F9F9FA",
            tension: 0.4,
            pointRadius: 0,
            pointBackgroundColor: "#000000",
            borderDash: [9],
            borderWidth:1

          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: {
            grid: { display: false }, // Remove grid for x-axis
          },
          y: {
            grid: { display: false }, // Remove grid for y-axis
            beginAtZero: true,
          },
        },
      };
  return (
    <div>
      <Line data={data} options={options} />;
    </div>
  )
}

export default Linechart
