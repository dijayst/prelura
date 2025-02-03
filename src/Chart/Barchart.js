import React from 'react'
import {Bar} from "react-chartjs-2"

//import { Chart as ChartJS } from 'chart.js/auto'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Barchart() {


    const labels = ["Linux", "Mac", "iOS", "Windows", "Android", "Other"];
    const trafficData = [20000, 30000, 25000, 35000, 15000,28000];
  
    const backgroundColors = labels.map(label => {
      if (label === "Linux") return "#9F9FF8";  // Light Purple
      if (label === "Mac") return "#96E2D6";
      if (label === "iOS") return "#000000";
      if (label === "Windows") return "#92BFFF";  // Light Purple
      if (label === "Android") return "#AEC7ED";
      if (label === "Other") return "#94E9B8";
      return "blue";  // Default color for other labels
    });
  
    const data = {
      labels,
      datasets: [
        {
          label: "Traffic by Device",
          data: trafficData,
          backgroundColor: backgroundColors,
          borderWidth: 1,
          borderRadius:8,
          hoverBackgroundColor: "#000000", 
          
        },
      ],
    };
  
    


const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows better responsiveness
  plugins: {
    legend: { position: "top" },
    title: { display: false, text: "Traffic by Device" },
  },
  layout: {
    padding: { top: 0, bottom: 0 }, // Adds spacing inside the chart
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { display: false }, // Removes grid lines for a cleaner look
    },
    x: {
      grid: { display: false },
      ticks: {
        padding: 0, // Add padding for better spacing between labels and bars
      },
      // Adding padding to the right of the chart area
      offset: true,
      min: 0, // This will ensure the scale starts from 0
    },
  },
};




  return (
    <Bar data={data} options={options} />
  )
}

export default Barchart
