import { FC } from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';

type LoadingScreenProps = {
  isLoading: boolean;
};

// Animation keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

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
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        zIndex: 9999,
        backdropFilter: 'blur(8px)',
      }}
    >
      <Box
        position="relative"
        width="120px"
        height="120px"
        sx={{
          animation: `${pulse} 2s infinite ease-in-out`,
        }}
      >
        {/* Logo Container */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: 'translate(-50%, -50%)',
            width: '80px',
            height: '80px',
            backgroundColor: '#3b82f6',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          }}
        >
          PS
        </Box>

        {/* Animated Rays */}
        {[...Array(8)].map((_, index) => (
          <Box
            key={index}
            position="absolute"
            top="50%"
            left="50%"
            width="100%"
            height="100%"
            sx={{
              transform: `translate(-50%, -50%) rotate(${index * 45}deg)`,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '4px',
                height: '40px',
                backgroundColor: '#3b82f6',
                transform: 'translate(-50%, -50%)',
                borderRadius: '2px',
                opacity: 0.6,
                animation: `${pulse} 2s infinite ease-in-out ${index * 0.1}s`,
              },
            }}
          />
        ))}

        {/* Rotating Circle */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width="100%"
          height="100%"
          sx={{
            transform: 'translate(-50%, -50%)',
            border: '4px solid #3b82f6',
            borderRadius: '50%',
            opacity: 0.3,
            animation: `${rotate} 3s linear infinite`,
          }}
        />
      </Box>
    </Box>
  );
};

export default LoadingScreen;
