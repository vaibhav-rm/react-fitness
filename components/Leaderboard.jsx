import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Card,
  CardContent,
  Box,
  Avatar,
  Tooltip,
  LinearProgress
} from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:nth-of-type(1)': {
    backgroundColor: theme.palette.warning.light,
  },
  '&:nth-of-type(2)': {
    backgroundColor: theme.palette.success.light,
  },
  '&:nth-of-type(3)': {
    backgroundColor: theme.palette.info.light,
  },
}));

const RewardAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: 56,
  height: 56,
  margin: '0 auto',
}));

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [userPoints, setUserPoints] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [achievedRewards, setAchievedRewards] = useState([]);

  useEffect(() => {
    const points = parseInt(localStorage.getItem('points'), 10) || 0;
    setUserPoints(points);

    const leaderboard = [
      { rank: 1, username: 'John Doe', points: 100 },
      { rank: 2, username: 'Jane Doe', points: 80 },
      { rank: 3, username: 'Bob Smith', points: 60 },
      { rank: 4, username: 'You', points: points },
    ];

    leaderboard.sort((a, b) => b.points - a.points);
    setLeaderboardData(leaderboard);

    const rewardsList = [
      { points: 50, reward: 'Bronze Medal', icon: <EmojiEventsIcon /> },
      { points: 100, reward: 'Silver Medal', icon: <StarIcon /> },
      { points: 150, reward: 'Gold Medal', icon: <EmojiEventsIcon /> },
      { points: 200, reward: 'VIP Pass', icon: <LocalActivityIcon /> },
    ];
    setRewards(rewardsList);

    // Check for achieved rewards
    const achieved = rewardsList.filter(reward => points >= reward.points);
    setAchievedRewards(achieved);
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Box mt={4} textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Leaderboard
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Complete challenges to climb up the leaderboard and earn rewards!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Rank</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {leaderboardData.map((row, index) => (
                    <StyledTableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{row.username}</TableCell>
                      <TableCell>{row.points}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Your Rewards
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              {rewards.map((reward, index) => (
                <Grid item key={index} xs={6} sm={3}>
                  <Tooltip title={`${reward.reward} - ${reward.points} Points`}>
                    <RewardAvatar style={{ backgroundColor: userPoints >= reward.points ? 'green' : '' }}>
                      {reward.icon}
                    </RewardAvatar>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
            <Box mt={2} textAlign="center">
              <Typography variant="h6">
                Points: {userPoints}
              </Typography>
              <Box mt={2}>
                <LinearProgress variant="determinate" value={(userPoints / 200) * 100} />
                <Typography variant="body2" color="textSecondary">
                  {userPoints} / 200 Points
                </Typography>
              </Box>
              <Typography variant="body2" mt={2}>
                Complete challenges to earn more points and unlock new rewards!
              </Typography>
              <Typography variant="h6" mt={2}>
                Achieved Rewards:
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {achievedRewards.map((reward, index) => (
                  <Grid item key={index} xs={6} sm={3}>
                    <Tooltip title={`${reward.reward} - ${reward.points} Points`}>
                      <RewardAvatar style={{ backgroundColor: 'gold' }}>
                        {reward.icon}
                      </RewardAvatar>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Leaderboard;
