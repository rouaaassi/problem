import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from '../../components/singin-card';
import Content from '../../components/content';
import { Box} from '@mui/material';
export default function SignInSide() {

  return (
    <Box>
      <CssBaseline enableColorScheme />
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: 'auto',
            }}
          >
            <Content />
            <SignInCard/>
          </Stack>
    </Box>
  );
}
