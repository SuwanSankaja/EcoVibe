import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'https://your-backend-api.com',
});

export const fetchChallenges = async () => {
  try {
    const response = await ApiService.get('/challenges');
    return response.data;
  } catch (error) {
    console.error('Error fetching challenges', error);
    throw error;
  }
};

export default ApiService;
