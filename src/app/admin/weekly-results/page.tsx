'use client'

import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function WeeklyResults() {
  const [chartData] = useState({
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Revenue',
        data: [2, 3, 20, 5],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Weekly Results',
      },
    },
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Weekly Results</h2>
        <div className="w-full h-96">
          <Bar options={options} data={chartData} />
        </div>
      </div>
    </div>
  )
}
