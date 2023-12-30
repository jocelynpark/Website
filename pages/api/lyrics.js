// pages/api/lyrics.js
import axios from 'axios';

function countYuhs(lyrics) {
  // Use a regular expression to count occurrences of 'yuh' or 'yeah'
  const matches = lyrics.match(/yuh|yeah/gi); // 'gi' for global, case-insensitive
  return matches ? matches.length : 0;
}

export default async function handler(req, res) {
  const searchTerm = 'Ariana Grande'; // or you could use req.query to get the search term from the request

  // Access your API key securely
  const apiKey = process.env.GENIUS_API_KEY;

  try {
    // First, search for the artist's songs
    const searchResponse = await axios.get('https://api.genius.com/search', {
      params: {
        q: searchTerm,
      },
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Process search results and fetch lyrics (pseudo-code)
    const songDetails = searchResponse.data.response.hits.map(hit => {
      // You would need to make additional requests to fetch the lyrics
      // Since Genius API does not provide lyrics directly, you would need to scrape them from the song's page
      // This is a simplified example and actual implementation would be more complex
      return {
        title: hit.result.full_title,
        url: hit.result.url, // URL to the Genius page where you could scrape the lyrics from
        // ... other details you need
      };
    });

    // Send back the response
    res.status(200).json(songDetails);

    // Now you need to fetch the lyrics for each song and count 'yuh's
    const yuhCountsByAlbum = {};
    for (const song of songDetails) {
      const lyricsResponse = await axios.get(song.url); // Fetch lyrics from the song's URL
      const yuhs = countYuhs(lyricsResponse.data); // Count 'yuh's in lyrics

      if (yuhCountsByAlbum[song.album]) {
        yuhCountsByAlbum[song.album] += yuhs;
      } else {
        yuhCountsByAlbum[song.album] = yuhs;
      }
    }

    // Convert the counts into an array of album-yuh pairs
    const lyricsData = Object.entries(yuhCountsByAlbum).map(([album, yuhs]) => ({
      album,
      yuhs
    }));
    res.status(200).json(lyricsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data from Genius API', error: error.message });
  }
}