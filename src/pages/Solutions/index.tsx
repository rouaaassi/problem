import React, { useEffect, useState } from 'react';
import { getSolutions, submitSolution } from '../../api/solutions';
import { Box, Typography, CircularProgress } from '@mui/material';
import SolutionForm from '../../components/solution-from';
import DashboardNavbar from '../../components/dashboard-bar';

const Solutions = ({ problemId }: { problemId: number }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [solutions, setSolutions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSolutions = async () => {
      setLoading(true);
      try {
        const data = await getSolutions(problemId);
        setSolutions(data);
      } catch (error) {
        console.error('Error fetching solutions', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, [problemId]);

  const handleSolutionSubmit = async (solutionData: { content: string }) => {
    try {
      const newSolution = await submitSolution(problemId, solutionData);
      setSolutions((prevSolutions) => [...prevSolutions, newSolution]);
    } catch (error) {
      console.error('Error submitting solution', error);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <DashboardNavbar />
      <Typography variant="h4" gutterBottom>Solutions</Typography>
      {solutions.length === 0 ? (
        <Typography>No solutions available yet.</Typography>
      ) : (
        solutions.map((solution, index) => (
          <Box key={index} mb={2}>
            <Typography variant="body1">{solution.content}</Typography>
          </Box>
        ))
      )}
      <SolutionForm problemId={problemId} onSubmit={handleSolutionSubmit} />
    </Box>
  );
};

export default Solutions;
