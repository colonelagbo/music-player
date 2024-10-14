import axios from 'axios';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_BASE_URL = `${CORS_PROXY}https://api.deezer.com`;

export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { q: query },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error searching tracks:', error);
    throw error;
  }
};

export const getTrackDetails = async (trackId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/track/${trackId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching track details:', error);
    throw error;
  }
};