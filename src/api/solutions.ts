import axios from 'axios';

const API_URL = 'http://localhost:3000/GraduationProject/solutions';

export const getSolutions = async (problemId: number) => {
  try {
    const response = await axios.get(`${API_URL}?problemId=${problemId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching solutions', error);
    throw error;
  }
};

export const submitSolution = async (problemId: number, solutionData: { content: string }) => {
  try {
    const response = await axios.post(`${API_URL}`, { problemId, ...solutionData });
    return response.data;
  } catch (error) {
    console.error('Error submitting solution', error);
    throw error;
  }
};
