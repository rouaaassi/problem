import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProblemDetails } from '../../api/problems';

const ProblemDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [problem, setProblem] = useState<any | null>(null);

  useEffect(() => {
    const fetchProblem = async () => {
      if (id) {
        try {
          const data = await getProblemDetails(Number(id));
          setProblem(data);
        } catch (error) {
          console.error('Error fetching problem details', error);
        }
      }
    };
    fetchProblem();
  }, [id]);

  return (
    <div>
      {problem && (
        <div>
          <h1>{problem.title}</h1>
          <p>{problem.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProblemDetails;
