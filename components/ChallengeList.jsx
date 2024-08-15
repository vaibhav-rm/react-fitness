import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function ChallengeList({ challenges, onComplete }) {
  if (!challenges || !Array.isArray(challenges)) {
    return <Typography variant="h6" color="error">No challenges available.</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {challenges.map((challenge) => (
        <Grid item key={challenge.id} xs={12} sm={6} md={4}>
          <Card sx={{ boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: 6 } }}>
            <CardMedia
              component="img"
              height="140"
              image={challenge.image}
              alt={challenge.type}
              sx={{ filter: 'brightness(85%)', transition: 'filter 0.3s', '&:hover': { filter: 'brightness(100%)' } }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {challenge.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {challenge.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onComplete(challenge)}
                sx={{ mt: 2 }}
              >
                Complete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ChallengeList;
