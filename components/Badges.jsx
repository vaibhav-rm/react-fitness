import React, { useState, useEffect } from 'react';

const AchievementBadges = () => {
  const [badges, setBadges] = useState([]);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    // Sample badge data
    const badgeData = [
      { id: 1, name: 'Beginner', image: 'https://via.placeholder.com/50' },
      { id: 2, name: 'Intermediate', image: 'https://via.placeholder.com/50' },
      { id: 3, name: 'Advanced', image: 'https://via.placeholder.com/50' },
    ];
    setBadges(badgeData);
  }, []);

  const handleEarnBadge = (badge) => {
    // Update badge data
    setBadges((prevBadges) => [...prevBadges, badge]);
  };

  const handleLevelUp = () => {
    // Update level
    setLevel((prevLevel) => prevLevel + 1);
  };

  const earnNewBadge = () => {
    // Sample new badge
    const newBadge = { id: badges.length + 1, name: `Badge ${badges.length + 1}`, image: 'https://via.placeholder.com/50' };
    handleEarnBadge(newBadge);
  };

  return (
    <div>
      <h2>Achievement Badges</h2>
      <ul>
        {badges.map((badge) => (
          <li key={badge.id}>
            <img src={badge.image} alt={badge.name} />
            <span>{badge.name}</span>
          </li>
        ))}
      </ul>
      <p>Level: {level}</p>
      <button onClick={earnNewBadge}>Earn New Badge</button>
      <button onClick={handleLevelUp}>Level Up!</button>
    </div>
  );
};

export default AchievementBadges;
