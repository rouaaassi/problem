import { Link, Typography } from "@mui/material";

export default function Copyright() {
    return (
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
        {'Copyright © '}
        <Link color="text.secondary" href="https://mui.com/">
          Coding
        </Link>
        &nbsp;
        {new Date().getFullYear()}
      </Typography>
    );
  }