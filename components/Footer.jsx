import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Box, Grid, Typography, Link } from '@mui/material';
import FacebookIcon from '../assets/facebook-icon.png';
import TwitterIcon from '../assets/twitter-icon.png';
import InstagramIcon from '../assets/instagram-icon.png';
import '../style/Footer.css'; // Optional: Create a separate CSS file for custom styles

const Footer = () => {
  return (
    <Box sx={{ mt: 8, py: 4, borderTop: '1px solid #ccc', transition: 'background-color 0.3s ease' }} className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} className="footer-grid">
          <Grid item xs={12} sm={3} className="footer-section">
            <Typography variant="h6" gutterBottom>
              Site Map
            </Typography>
            <Link component={RouterLink} to="/" color="inherit" sx={{ display: 'block', mt: 1, textDecoration: 'none', transition: 'color 0.3s ease' }}>Home</Link>
            <Link component={RouterLink} to="/features" color="inherit" sx={{ display: 'block', mt: 1, textDecoration: 'none', transition: 'color 0.3s ease' }}>Features</Link>
            <Link component={RouterLink} to="/challenges" color="inherit" sx={{ display: 'block', mt: 1, textDecoration: 'none', transition: 'color 0.3s ease' }}>Challenges</Link>
            <Link component={RouterLink} to="/completedchallenges" color="inherit" sx={{ display: 'block', mt: 1, textDecoration: 'none', transition: 'color 0.3s ease' }}>Completed</Link>
            <Link component={RouterLink} to="/register" color="inherit" sx={{ display: 'block', mt: 1, textDecoration: 'none', transition: 'color 0.3s ease' }}>Register</Link>
          </Grid>
          <Grid item xs={12} sm={3} className="footer-section">
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com" target="_blank" rel="noopener" color="inherit" sx={{ display: 'flex', alignItems: 'center', mt: 1, textDecoration: 'none', transition: 'color 0.3s ease' }}>
              <img src={FacebookIcon} alt="Facebook" style={{ width: 24, marginRight: 8 }} />
              Facebook
            </Link>
            <Link href="https://www.twitter.com" target="_blank" rel="noopener" color="inherit" sx={{ display: 'flex', alignItems: 'center', mt: 1, textDecoration: 'none', transition: 'color 0.3s ease' }}>
              <img src={TwitterIcon} alt="Twitter" style={{ width: 24, marginRight: 8 }} />
              Twitter
            </Link>
            <Link href="https://www.instagram.com" target="_blank" rel="noopener" color="inherit" sx={{ display: 'flex', alignItems: 'center', mt: 1, textDecoration: 'none', transition: 'color 0.3s ease' }}>
              <img src={InstagramIcon} alt="Instagram" style={{ width: 24, marginRight: 8 }} />
              Instagram
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} className="footer-section">
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Email: support@dailychallenge.com
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Phone: (123) 456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} className="footer-section">
            <Typography variant="h6" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
              <input type="email" placeholder="Your email" className="footer-input" required />
              <button type="submit" className="footer-button">
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, borderTop: '1px solid #ccc', pt: 2, display: 'flex', justifyContent: 'space-between' }} className="footer-bottom">
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} Daily Challenge Generator. All rights reserved.
          </Typography>
          <Box>
            <Link component={RouterLink} to="/terms" color="inherit" sx={{ textDecoration: 'none', transition: 'color 0.3s ease', mx: 1 }}>
              Terms of Service
            </Link>
            <Link component={RouterLink} to="/privacy" color="inherit" sx={{ textDecoration: 'none', transition: 'color 0.3s ease', mx: 1 }}>
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
