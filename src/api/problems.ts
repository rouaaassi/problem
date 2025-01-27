import axios from 'axios';

const API_URL = 'localhost:3000/GraduationProject/problems';

export const getProblems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching problems', error);
    throw error;
  }
};

export const getProblemDetails = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching problem details', error);
    throw error;
  }
};
