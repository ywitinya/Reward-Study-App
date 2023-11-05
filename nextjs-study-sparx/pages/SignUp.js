import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    reEnterPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send user registration data to the backend for processing
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Registration successful');
        // Display a success message or redirect the user to a confirmation page
      } else {
        console.error('Registration failed');
        // Display an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-gray-200 p-6 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Signup</h1>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
          />
          <input
                type="text"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
              />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
          />
          <input
            type="password"
            name="reEnterPassword"
            value={formData.reEnterPassword}
            onChange={handleChange}
            placeholder="Re-enter Password"
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover-bg-blue-600">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
