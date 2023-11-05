import React, { useState, useEffect } from 'react';
import RewardItem from './components/RewardItem';
import Header from './components/Header';

function Rewards() {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('API_ENDPOINT/rewards'); // Replace with your actual API endpoint
        if (response.ok) {
          const rewardsData = await response.json();
          setRewards(rewardsData);
        }
      } catch (error) {
        console.error('Error fetching rewards:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h2>Rewards</h2>
      {rewards.map((reward) => (
        <RewardItem key={reward.id} reward={reward} />
      ))}
    </div>
  );
}

export default Rewards;
