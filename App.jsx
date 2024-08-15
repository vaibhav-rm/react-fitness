import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Home from './Home';
import Challenges from './Challenges';
import Features from './pages/Features';
import CompletedChallenges from './components/CompletedChallenges';
import RegisterForm from './components/register';
import theme from './theme';
import './App.css';
import Navbar from './components/Navbar';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="*" element={<MainApp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const MainApp = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login' && location.pathname !== '/register';
  return (
    <>
      {showNavbar && <Navbar />}
      <Container maxWidth="lg">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/completedchallenges" element={<CompletedChallenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
