import React from 'react';
import Button from '@mui/material/Button';

const ChallengeButton = ({ onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      Get Random Challenges
    </Button>
  );
};

export default ChallengeButton;
