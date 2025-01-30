import { Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  return (
    <Box position="static" sx={{background:'#86bbf4', marginBottom:'90px'}}>
      <Toolbar >
        <Button color="inherit" component={Link} to="/Problems"variant="outlined">Problems</Button>
        <Button color="inherit" component={Link} to="/Solutions">Solutions</Button>
        <Button color="inherit" component={Link} to="/Solutions">Submit</Button>
      </Toolbar>
    </Box>
  );
};

export default DashboardNavbar;
