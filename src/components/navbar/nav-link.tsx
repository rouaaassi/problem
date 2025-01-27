import { Button, Link } from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface CustomLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <Link underline="none" component="a" onClick={handleClick}>
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
            backgroundColor: 'action.hover',
          },
        }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavLink;
