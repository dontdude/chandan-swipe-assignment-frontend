import axios from 'axios';

const API_KEY = 'fca_live_CX6qtkm6PkDc9DDCZYwooT1oIpH0599ftqJzV8P3';

export const fetchCurrencyChange = async () => {
  try {
    const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching currency", error);
    return null;
  }
};