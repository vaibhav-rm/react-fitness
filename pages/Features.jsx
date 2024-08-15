import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import skillImage from '../assets/images/skill.jpg';
import mindImage from '../assets/images/mindfullness.jpg';
import fitnessImage from '../assets/images/Full.jpg';
import '../style/Features.css'; // Import the CSS file

const featuresData = [
  {
    title: "Fitness",
    description: "Boost your physical health with daily fitness challenges.",
    image: fitnessImage,
  },
  {
    title: "Skill Development",
    description: "Learn new skills and enhance your knowledge every day.",
    image: skillImage,
  },
  {
    title: "Mindfulness",
    description: "Improve your mental well-being with mindfulness exercises.",
    image: mindImage,
  },
];

const Features = () => {
  return (
    <Box className="features-section">
      <Container maxWidth="lg" className="container">
        <Typography variant="h4" component="h2" className="features-title">
          Features
        </Typography>
        <Grid container spacing={4} className="features-grid">
          {featuresData.map((feature, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card className="feature-card">
                <CardMedia
                  component="img"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent className="feature-card-content">
                  <Typography gutterBottom variant="h5" component="div" className="feature-card-title">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="feature-card-description">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
