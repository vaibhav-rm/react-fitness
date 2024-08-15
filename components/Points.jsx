import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Points = ({ points, setPoints }) => {
  useEffect(() => {
    const storedPoints = localStorage.getItem('points');
    if (storedPoints) {
      setPoints(parseInt(storedPoints, 10));
    }
  }, [setPoints]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedPoints = localStorage.getItem('points');
      if (storedPoints) {
        setPoints(parseInt(storedPoints, 10));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [setPoints]);

  const clearPoints = () => {
    localStorage.removeItem('points');
    setPoints(0);
  };

  return (
    <>
      <Typography variant="h6" sx={{ color: '#fff', marginRight: 2 }}>
        Points: {points}
      </Typography>
      <Button variant="contained" color="secondary" onClick={clearPoints}>
        Clear Points
      </Button>
    </>
  );
};

export default Points;
