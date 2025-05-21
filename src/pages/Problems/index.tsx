import { useEffect, useState } from 'react';
import { getProblems } from '../../api/problems';
import ProblemCard from '../../components/problem-card';
import { Typography } from '@mui/material';
import { ProblemProvider } from '../../context/ProblemContext';
import DashboardNavbar from '../../components/dashboard-bar';

const Problems = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [problems, setProblems] = useState<any[]>([]);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const data = await getProblems();
        setProblems(data);
      } catch (error) {
        console.error('Error fetching problems', error);
      }
    };
    fetchProblems();
  }, []);

  return (
   <ProblemProvider>
    <DashboardNavbar />
    <div>
      {problems.map((problem) => (
        <ProblemCard
          key={problem.id}
          title={problem.title}
          description={problem.description}
          onClick={() => { }}
        />
      ))}
      <Typography>Problems List</Typography>
    </div>
    </ProblemProvider>
  );
};

export default Problems;
