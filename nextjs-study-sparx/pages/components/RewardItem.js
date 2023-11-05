import React from 'react';

function RewardItem({ reward }) {
  return (
    <div className="reward-item">
      <h3>{reward.title}</h3>
      <p>{reward.description}</p>
      <p>Points needed: {reward.points}</p>
      {/* <button onClick={() => redeemReward(reward.id)}>Redeem</button> */}
    </div>
  );
}

export default RewardItem;
