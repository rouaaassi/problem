import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface Problem {
  _id: string;
  name: string;
  description: string;
  timeLimit: number;
  memoryLimit: number;
}

interface ProblemContextType {
  problems: Problem[];
  fetchProblems: () => Promise<void>;
  updateProblem: (id: string, data: Partial<Problem>) => Promise<void>;
}

export const ProblemContext = createContext<ProblemContextType | undefined>(undefined);

export const ProblemProvider = ({ children }: { children: ReactNode }) => {
  const [problems, setProblems] = useState<Problem[]>([]);

  const fetchProblems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/GraduationProject/problems');
      setProblems(response.data.data);
    } catch (error) {
      console.error('Failed to fetch problems:', error);
    }
  };

  const updateProblem = async (id: string, data: Partial<Problem>) => {
    try {
      await axios.patch(`http://localhost:3000/GraduationProject/problems/${id}`, data);
      await fetchProblems(); // Refresh the list after updating
    } catch (error) {
      console.error('Failed to update problem:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  return (
    <ProblemContext.Provider value={{ problems, fetchProblems, updateProblem }}>
      {children}
    </ProblemContext.Provider>
  );
};

export const useProblems = (): ProblemContextType => {
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error('useProblems must be used within a ProblemProvider');
  }
  return context;
};
