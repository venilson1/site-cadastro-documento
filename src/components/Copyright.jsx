import { Typography } from "@mui/material";

export default function Copyright(props) {
  return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/venilson1/">
              Venilson Santos
          </a>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
  );
}