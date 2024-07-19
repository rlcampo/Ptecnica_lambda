// src/app/LinesChart.js
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables as ChartRegisterables } from 'chart.js';
import 'chartjs-adapter-date-fns';

// Registrar todos los componentes necesarios de Chart.js
ChartJS.register(...ChartRegisterables);

export function BTCLineChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destruir el gráfico existente si hay uno
    }

    if (chartRef.current && data && data.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return; // Verificar que el contexto no sea nulo

      chartInstance.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: data.map(item => new Date(item.timestamp)),
          datasets: [
            {
              label: 'BTC Price',
              data: data.map(item => ({ x: new Date(item.timestamp), y: item.price })),
              fill: false,
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'BTC Prices Over Time',
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              title: {
                display: true,
                text: 'Time',
              },
            },
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Price in USD',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Asegurar que el gráfico se destruya al desmontar el componente
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
}

export function ETHLineChart({ data }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destruir el gráfico existente si hay uno
    }

    if (chartRef.current && data && data.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return; // Verificar que el contexto no sea nulo

      chartInstance.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: data.map(item => new Date(item.timestamp)),
          datasets: [
            {
              label: 'ETH Price',
              data: data.map(item => ({ x: new Date(item.timestamp), y: item.price })),
              fill: false,
              borderColor: 'rgba(153,102,255,1)',
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'ETH Prices Over Time',
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              title: {
                display: true,
                text: 'Time',
              },
            },
            y: {
              type: 'linear',
              title: {
                display: true,
                text: 'Price in USD',
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Asegurar que el gráfico se destruya al desmontar el componente
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
}
