import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface ProblemCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, description, onClick }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Button onClick={onClick}>View Details</Button>
      </CardContent>
    </Card>
  );
};

export default ProblemCard;
