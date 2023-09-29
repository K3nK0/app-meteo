import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

import dataJSON from "../../../data.json"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const dataWeather = dataJSON

export const options = {
responsive: false,
plugins: {
    legend: {
        position: 'top',
        },
    title: {
        display: true,
        text: 'date',
        },
    },
};

const labels = dataWeather.hourly.time

export const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: dataWeather.hourly.temperature_2m,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Humidité',
        data: dataWeather.hourly.relativehumidity_2m,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

export default function GraphWeather() {
    return <Line options={options} data={data} />
}
