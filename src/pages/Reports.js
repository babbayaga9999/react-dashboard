// src/pages/Reports.js
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Paper, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'User Activity',
        data: [65, 59, 80, 81, 56, 55], // Initial data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fetching new data
      const newData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: newData, // Update with new random data
          },
        ],
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'User Activity Reports (Last 6 Months)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: '800px' }}>
        <Typography variant="h4" gutterBottom>
          Reports
        </Typography>
        <Bar data={chartData} options={options} />
      </Paper>
    </Box>
  );
};

export default Reports;
