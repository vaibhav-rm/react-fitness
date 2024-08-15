import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'; // Fixed the import path

const ProgressTracker = () => {
  const [dailyLog, setDailyLog] = useState([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Sample data for daily log
    const logData = [
      { date: '2024-06-01', completed: 1 },
      { date: '2024-06-02', completed: 1 },
      { date: '2024-06-03', completed: 0 },
      { date: '2024-06-04', completed: 1 },
      { date: '2024-06-05', completed: 1 },
      { date: '2024-06-06', completed: 1 },
      { date: '2024-06-07', completed: 0 },
    ];
    setDailyLog(logData);
    calculateStreak(logData);
  }, []);

  const handleDailyLog = (date, completed) => {
    setDailyLog((prevLog) => {
      const updatedLog = [...prevLog, { date, completed }];
      calculateStreak(updatedLog);
      return updatedLog;
    });
  };

  const calculateStreak = (log) => {
    let currentStreak = 0;
    let maxStreak = 0;

    for (let i = log.length - 1; i >= 0; i--) {
      if (log[i].completed) {
        currentStreak++;
      } else {
        currentStreak = 0;
      }
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
      }
    }

    setStreak(maxStreak);
  };

  const logTodayChallenge = () => {
    const today = new Date().toISOString().split('T')[0];
    handleDailyLog(today, 1); // Assume today's challenge is completed
  };

  return (
    <div>
      <h2>Progress Tracker</h2>
      <LineChart width={400} height={200} data={dailyLog}>
        <Line type="monotone" dataKey="completed" stroke="#8884d8" />
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
      </LineChart>
      <p>Streak: {streak} days</p>
      <button onClick={logTodayChallenge}>Log Today's Challenge</button>
    </div>
  );
};

export default ProgressTracker;
