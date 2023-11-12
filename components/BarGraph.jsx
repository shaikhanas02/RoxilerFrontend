
import React, { useEffect, useRef } from "react";

import { Chart } from "chart.js/auto";

const BarGraph = ({ data, selectedMonth,className }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const filteredData = data.products.filter(
      (product) => product.date.toLowerCase() === selectedMonth.toLowerCase()
    );

    const priceRanges = [
        0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000,
    ]; 
    const productCounts = Array(priceRanges.length + 1).fill(0);

    filteredData.forEach((product) => {
      for (let i = 0; i < priceRanges.length; i++) {
        if (product.price >= priceRanges[i] && product.price < priceRanges[i + 1]) {
          productCounts[i]++;
          break;
        }
      }
    });

    const ctx = chartRef.current.getContext("2d");

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: priceRanges.map((range) => `$${range}-${range + 200}`),
        datasets: [
          {
            label: `Number of Products - ${selectedMonth}`,
            data: productCounts,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            barThickness: "flex",
            // barPercentage: 1,
            // categoryPercentage: 1,
          },
        ],
      },
      options: {
        scales: {
          x: [
            {
              type: "category",
              title: {
                display: true,
                text: "Price Ranges",
              },
              grid: {
                display: false,  
              },
            },
          ],

          y: [
            {
              type: "linear",
              beginAtZero: true,
              title: {
                display: true,
                text: `Number of Products`,
              },
              grid: {
                display: false,  // Hide y-axis grid lines
              },
            },
          ],
        },
      },
    });
  }, [data, selectedMonth]);

  return <canvas  className={`${className}`}ref={chartRef}></canvas>;
};

export default BarGraph;
