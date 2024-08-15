// components/CompletedChallengesPage.jsx
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CompletedChallengesPage() {
  const [completedChallenges, setCompletedChallenges] = useState([]);

  useEffect(() => {
    const savedChallenges = JSON.parse(localStorage.getItem('completedChallenges')) || [];
    setCompletedChallenges(savedChallenges);
  }, []);

  const handleClearCompleted = () => {
    localStorage.removeItem('completedChallenges');
    setCompletedChallenges([]);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Completed Challenges
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClearCompleted} sx={{ mb: 2 }}>
        Clear Completed Challenges
      </Button>
      <List>
        {completedChallenges.map((challenge) => (
          <ListItem key={challenge.id}>
            <ListItemText primary={challenge.description} secondary={challenge.type} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default CompletedChallengesPage;
