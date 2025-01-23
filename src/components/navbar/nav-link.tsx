import { Button, Link } from '@mui/material';
import { ReactNode } from 'react';
// import { useLocation } from 'react-router-dom';

interface CustomLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<CustomLinkProps> = ({ href, children }) => {
//   const location = useLocation();
//   const isSelected = location.pathname === href;

  return (
    <Link href={href} underline="none" component="a">
      <Button
        variant="contained"
        size="small"
        sx={{
          height: 32,
          padding: '8px 12px',
          borderRadius: '4px 4px 0 0',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          color: 'text.secondary',
          '&:hover': {
            backgroundColor:'action.hover',
          },
        }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavLink;
