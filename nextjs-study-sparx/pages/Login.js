import React from 'react';
import Link from 'next/link';

const Login = () => {
  return (
    <>
    <div className="flex  space-x-8 h-screen">
       <div className="bg-purple-700 p-6 rounded-lg">
            <h1 className="text-7xl text-white font-bold mb-4">Knowledge Kash</h1>
            
       </div>
      <form className="mb-4">
        <div className="pt-40 pl-10">
        <div >
          <h2 className="text-4xl font-semibold mb-4">Login</h2>
          <label>Email:</label>
          <input 
          type="text"
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md p-2 mb-2"
           />
        </div>
        <div>
          <label>Password:</label>
          <input 
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full border border-gray-300 rounded-md p-2 mb-2" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Sign In
        </button>
        <p>
            <Link href="/SignUp" className="text-left text-2xl font-semibold mb-4">
                or<br></br>
            Create New Account
            </Link>
        </p>
        </div>
        
      </form>
    </div>
    
    
     
   </>
  );
};

export default Login;
