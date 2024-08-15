import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ChallengeList from './components/ChallengeList';
import AchievementBadges from './components/Badges';
import Points from './components/Points';

const allChallenges = [
  // Your challenges array { id: 1, type: 'Fitness', description: 'Do 20 push-ups', image: '/challenge-images/fitness1.jpg' },
{ id: 2, type: 'Skill', description: 'Learn 10 new words in a foreign language', image: '/challenge-images/skill1.jpg' },
{ id: 3, type: 'Health', description: 'Drink 8 glasses of water', image: '/challenge-images/health1.jpg' },
{ id: 4, type: 'Creativity', description: 'Draw a picture of something you love', image: '/challenge-images/creativity1.jpg' },
{ id: 5, type: 'Mindfulness', description: 'Practice 10 minutes of meditation', image: '/challenge-images/mindfulness1.jpg' },
{ id: 6, type: 'Fitness', description: 'Run for 15 minutes', image: '/challenge-images/fitness2.jpg' },
{ id: 7, type: 'Skill', description: 'Write a short story', image: '/challenge-images/skill2.jpg' },
{ id: 8, type: 'Health', description: 'Eat a healthy breakfast', image: '/challenge-images/health2.jpg' },
{ id: 9, type: 'Creativity', description: 'Take 5 unique photographs', image: '/challenge-images/creativity2.jpg' },
{ id: 10, type: 'Mindfulness', description: 'Spend 5 minutes reflecting on your day', image: '/challenge-images/mindfulness2.jpg' },
{ id: 11, type: 'Fitness', description: 'Do 30 squats', image: '/challenge-images/fitness3.jpg' },
{ id: 12, type: 'Skill', description: 'Learn to juggle', image: '/challenge-images/skill3.jpg' },
{ id: 13, type: 'Health', description: 'Eat 5 servings of vegetables', image: '/challenge-images/health3.jpg' },
{ id: 14, type: 'Creativity', description: 'Write a poem', image: '/challenge-images/creativity3.jpg' },
{ id: 15, type: 'Mindfulness', description: 'Try a guided meditation', image: '/challenge-images/mindfulness3.jpg' },
{ id: 16, type: 'Fitness', description: 'Do a 10-minute yoga session', image: '/challenge-images/fitness4.jpg' },
{ id: 17, type: 'Skill', description: 'Learn a new recipe', image: '/challenge-images/skill4.jpg' },
{ id: 18, type: 'Health', description: 'Go for a 30-minute walk', image: '/challenge-images/health4.jpg' },
{ id: 19, type: 'Creativity', description: 'Make a scrapbook page', image: '/challenge-images/creativity4.jpg' },
{ id: 20, type: 'Mindfulness', description: 'Write down 3 things you are grateful for', image: '/challenge-images/mindfulness4.jpg' },
{ id: 21, type: 'Fitness', description: 'Do a 5-minute plank', image: '/challenge-images/fitness5.jpg' },
{ id: 22, type: 'Skill', description: 'Learn a new dance move', image: '/challenge-images/skill5.jpg' },
{ id: 23, type: 'Health', description: 'Try a new fruit', image: '/challenge-images/health5.jpg' },
{ id: 24, type: 'Creativity', description: 'Paint a picture', image: '/challenge-images/creativity5.jpg' },
{ id: 25, type: 'Mindfulness', description: 'Do a digital detox for an hour', image: '/challenge-images/mindfulness5.jpg' },
{ id: 26, type: 'Fitness', description: 'Climb stairs for 10 minutes', image: '/challenge-images/fitness6.jpg' },
{ id: 27, type: 'Skill', description: 'Learn the basics of a new language', image: '/challenge-images/skill6.jpg' },
{ id: 28, type: 'Health', description: 'Make a smoothie', image: '/challenge-images/health6.jpg' },
{ id: 29, type: 'Creativity', description: 'Write a song', image: '/challenge-images/creativity6.jpg' },
{ id: 30, type: 'Mindfulness', description: 'Practice deep breathing for 5 minutes', image: '/challenge-images/mindfulness6.jpg' },
{ id: 31, type: 'Fitness', description: 'Do 50 jumping jacks', image: '/challenge-images/fitness7.jpg' },
{ id: 32, type: 'Skill', description: 'Read a chapter of a non-fiction book', image: '/challenge-images/skill7.jpg' },
{ id: 33, type: 'Health', description: 'Cook a healthy meal', image: '/challenge-images/health7.jpg' },
{ id: 34, type: 'Creativity', description: 'Create a vision board', image: '/challenge-images/creativity7.jpg' },
{ id: 35, type: 'Mindfulness', description: 'Spend 10 minutes in nature', image: '/challenge-images/mindfulness7.jpg' },
{ id: 36, type: 'Fitness', description: 'Do a HIIT workout', image: '/challenge-images/fitness8.jpg' },
{ id: 37, type: 'Skill', description: 'Learn to knit or crochet', image: '/challenge-images/skill8.jpg' },
{ id: 38, type: 'Health', description: 'Drink a detox tea', image: '/challenge-images/health8.jpg' },
{ id: 39, type: 'Creativity', description: 'Write a blog post', image: '/challenge-images/creativity8.jpg' },
{ id: 40, type: 'Mindfulness', description: 'Do a body scan meditation', image: '/challenge-images/mindfulness8.jpg' },

];

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [showChallenges, setShowChallenges] = useState(false);
  const [points, setPoints] = useState(() => {
    const storedPoints = localStorage.getItem('points');
    return storedPoints ? parseInt(storedPoints, 10) : 0;
  });

  const getRandomChallenges = (num) => {
    const shuffled = [...allChallenges].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const fetchRandomChallenges = () => {
    const randomChallenges = getRandomChallenges(5); // Get 5 random challenges
    setChallenges(randomChallenges);
    localStorage.setItem('startedChallenges', JSON.stringify(randomChallenges));
    setShowChallenges(true);
  };

  const handleCompleteChallenge = (completedChallenge) => {
    const updatedCompletedChallenges = JSON.parse(localStorage.getItem('completedChallenges')) || [];
    updatedCompletedChallenges.push(completedChallenge);
    localStorage.setItem('completedChallenges', JSON.stringify(updatedCompletedChallenges));

    // Update points immediately
    const updatedPoints = points + 10; // Add 10 points for each completed challenge
    localStorage.setItem('points', updatedPoints);
    setPoints(updatedPoints);

    // Update state to remove completed challenge from current challenges
    setChallenges(challenges.filter(challenge => challenge.id !== completedChallenge.id));
  };

  return (
    <Box id="challenges" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Your Challenges for Today
      </Typography>
      <Button variant="contained" color="secondary" onClick={fetchRandomChallenges} sx={{ mt: 2, mb: 2 }}>
        Start
      </Button>
      <Points points={points} setPoints={setPoints} /> {/* Pass points and setPoints as props */}

      {showChallenges && (
        <>
          <ChallengeList challenges={challenges} onComplete={handleCompleteChallenge} />
        </>
      )}
    </Box>
  );
};

export default Challenges;
