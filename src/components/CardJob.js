import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skills from './Skills';



export default function CardJob({data}) {
  return (
    <Card 
    sx={{ backgroundColor: 'rgb(149, 158, 161)',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginTop: '15px'}}>
          {data.title}
        </Typography>
        <Skills data={data} />
        <Typography variant="body2" sx={{ fontSize: '16px', marginTop: '10px'}}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </Card>
  );
}