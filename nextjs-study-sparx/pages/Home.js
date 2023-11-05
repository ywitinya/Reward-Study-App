import React from 'react';
import Header from './components/Header';

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="pt-40">
      <h2 className="text-center text-6xl font-bold">Welcome to<br></br> KnowledgeKash!</h2>
      <p className="text-center text-2xl font-semibold"><br></br>This is the home page of our website.</p>
      <div className="flex justify-center items-center pt-20 pb-40">
        <button type="submit" className="bg-purple-600 text-2xl font-semibold text-white p-2 rounded-md hover:bg-blue-600">
            Add Your Own Goal!
        </button>
      </div>
      </div>
    </div>
  );
};

export default HomePage;
