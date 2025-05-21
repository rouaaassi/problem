import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TimerIcon from '@mui/icons-material/Timer';

const items = [
  {
    icon: <CodeIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
    title: 'Competitive Programming',
    description: 'Challenge yourself with real-world programming problems.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
    title: 'Win Prizes',
    description: 'Compete and win exciting prizes while showcasing your skills.',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
    title: 'Learn & Grow',
    description: 'Access comprehensive learning resources and track progress.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
    title: 'Join Community',
    description: 'Connect with fellow programmers and share knowledge.',
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
    title: 'Problem Solving',
    description: 'Develop critical thinking through algorithmic challenges.',
  },
  {
    icon: <TimerIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
    title: 'Real-time Contests',
    description: 'Test your skills in timed coding competitions.',
  },
];

export default function Content() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Stack
      spacing={{ xs: 1.5, sm: 2 }}
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        maxWidth: { md: '400px', lg: '450px' },
        p: { md: 2, lg: 2.5 },
        borderRadius: 2,
        background: isDarkMode
          ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(25, 118, 210, 0.05))'
          : 'linear-gradient(135deg, rgba(25, 118, 210, 0.05), rgba(25, 118, 210, 0.02))',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mb: { xs: 0.5, sm: 1 },
            background: isDarkMode
              ? 'linear-gradient(45deg, #64B5F6, #4FC3F7)'
              : 'linear-gradient(45deg, #1976D2, #2196F3)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: { md: '1.5rem', lg: '1.75rem' },
          }}
        >
          Welcome to CodeCraft
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
            mb: { xs: 1.5, sm: 2 },
            fontSize: { md: '0.875rem', lg: '1rem' },
          }}
        >
          Your journey to becoming a better programmer starts here
        </Typography>
      </Box>

      <Stack spacing={{ xs: 1, sm: 1.5 }}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap: { xs: 0.75, sm: 1 },
              p: { xs: 0.75, sm: 1 },
              borderRadius: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateX(4px)',
                background: isDarkMode
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.02)',
              },
            }}
          >
            <Box
              sx={{
                color: isDarkMode ? 'primary.light' : 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: 36, sm: 40 },
                height: { xs: 36, sm: 40 },
                borderRadius: 1,
                background: isDarkMode
                  ? 'rgba(25, 118, 210, 0.1)'
                  : 'rgba(25, 118, 210, 0.05)',
              }}
            >
              {item.icon}
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 'bold',
                  mb: 0.25,
                  color: isDarkMode ? 'white' : 'text.primary',
                  fontSize: { md: '0.875rem', lg: '1rem' },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                  fontSize: { md: '0.75rem', lg: '0.875rem' },
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}