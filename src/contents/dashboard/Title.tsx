import * as Preact from 'preact';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: Preact.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}
