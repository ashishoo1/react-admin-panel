import React from "react";
import Chart from "react-apexcharts";


const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: undefined,
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "category",
        categories: [
          "week 1",
          "week 2",
          "week 3",
          "week 4",
          "week 5",
          "week 6",
          "week 7",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return <div className="CustomerReview">
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default CustomerReview;
