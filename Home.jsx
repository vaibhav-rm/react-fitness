// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import logo from './logo1.gif';
import './style/home.css';
import Video from './assets/video/intro.mp4';

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/challenges');
  };

  return (
    <>
      {/* Header Section */}
      <header>
        <img src={logo} alt="Logo" />
        <Typography variant="h2" component="h1" className="header-title">
          Daily Challenge Generator
        </Typography>
      </header>

      {/* Welcome Section */}
      <div className="welcome-section">
        <Typography variant="h5" component="p" sx={{ color: 'black', marginBottom: '1rem' }}>
          Improve your skills, health, and personal development with daily challenges.
        </Typography>

        <Typography variant="h5" component="p" sx={{ color: 'black', marginBottom: '1rem' }}>
          "Rise to the Occasion: Embrace Today's Challenge!"
        </Typography>
      </div>

      {/* Features Section */}
      <div className="features-section" id="features">
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Why Choose Us?
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Personalized Challenges
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Get challenges tailored to your personal goals and preferences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Track Your Progress
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Monitor your achievements and stay motivated.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Community Support
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Join a community of like-minded individuals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Expert Tips
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Get advice and tips from industry experts.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* Video Section */}
      <div style={{ padding: '4rem 1rem', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Watch Our Introduction Video
        </Typography>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
          <iframe
            src={Video}
            title="Introduction Video"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section" id="testimonials">
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          What Our Users Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Avatar alt="User 1" src="/path/to/avatar1.jpg" sx={{ width: 56, height: 56, margin: '0 auto' }} />
                <Typography variant="h6" component="h3" gutterBottom textAlign="center">
                  User 1
                </Typography>
                <Typography variant="body2" color="textSecondary" textAlign="center">
                  "This app has changed my life! The daily challenges keep me motivated and I love seeing my progress."
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Avatar alt="User 2" src="/path/to/avatar2.jpg" sx={{ width: 56, height: 56, margin: '0 auto' }} />
                <Typography variant="h6" component="h3" gutterBottom textAlign="center">
                  User 2
                </Typography>
                <Typography variant="body2" color="textSecondary" textAlign="center">
                  "A fantastic way to improve my skills and stay healthy. The community support is amazing!"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Avatar alt="User 3" src="/path/to/avatar3.jpg" sx={{ width: 56, height: 56, margin: '0 auto' }} />
                <Typography variant="h6" component="h3" gutterBottom textAlign="center">
                  User 3
                </Typography>
                <Typography variant="body2" color="textSecondary" textAlign="center">
                  "Highly recommend this app to anyone looking to challenge themselves daily!"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGetStarted} sx={{ marginTop: '2rem' }}>
          Join Now
        </Button>
      </div>
    </>
  );
}

export default Home;
