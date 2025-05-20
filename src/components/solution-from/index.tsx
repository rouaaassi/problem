import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SolutionFormProps {
  problemId: number;
  onSubmit: (solutionData: { content: string }) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SolutionForm: React.FC<SolutionFormProps> = ({ onSubmit }) => {
  const [solution, setSolution] = useState('');

  const handleSubmit = () => {
    onSubmit({ content: solution });
    setSolution('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        label="Your Solution"
        variant="outlined"
        fullWidth
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
        required
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
    </Box>
  );
};

export default SolutionForm;
