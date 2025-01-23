import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

type LoadingScreenProps = {
  isLoading: boolean;
};

const LoadingScreen: FC<LoadingScreenProps> = (props) => {
  const { isLoading } = props;

  if (!isLoading) {
    return null;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 9999 }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingScreen;
