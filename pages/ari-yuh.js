// Write a script that uses the Genius API client to fetch song lyrics. Use Axios to make HTTP requests if you're not using a dedicated Genius client.
// pages/ari-yuh.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AriYuh = () => {
  const [lyricsData, setLyricsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch lyrics data from your internal API
  useEffect(() => {
    const fetchLyrics = async () => {
      setLoading(true);
      try {
        // Replace '/api/lyrics' with the path to your internal API route
        const response = await axios.get('/api/lyrics');
        setLyricsData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLyrics();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const chartData = {
    labels: lyricsData.map(song => song.album),
    datasets: [{
      label: 'Number of Yuhs',
      data: lyricsData.map(song => song.yuhs),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    }]
  };

  console.log(chartData);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Yuhs by Album'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      },
      x: { // For version 3, you should directly use 'x' instead of 'xAxes'
        title: {
          display: true,
          text: 'Album'
        }
      }
    }
  };

  return (
    <div>
      <h1>Ariana Grande Yuh in Songs</h1>
      <ul>
        {lyricsData.map((song, index) => (
          <li key={index}>
            <p>{song.title}</p>
            {/* You might want to include a link to the full lyrics or Genius page */}
            <a href={song.url} target="_blank" rel="noopener noreferrer">
              View Lyrics
            </a>
          </li>
        ))}
      </ul>
      <h1>Ariana Grande `&ldquo;`Yuh`&ldquo;` in Songs</h1>
      <Bar data={chartData} options={chartOptions} />
    </div>

  );
};

export default AriYuh;
