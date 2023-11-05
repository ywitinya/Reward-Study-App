import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
     
      await loginWithRedirect({
        screen_hint: 'login', 
        login_hint: email, 
         here
      });
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <>
      <div className="flex  space-x-8 h-screen">
        <div className="bg-purple-700 p-6 rounded-lg">
          <h1 className="text-9xl text-white font-bold mb-4">Study Sparx</h1>
        </div>
        <form className="mb-4" onSubmit={handleLogin}>
          <div className="pt-40 pl-10">
            <div>
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
                className="w-full border border-gray-300 rounded-md p-2 mb-2"
              />
            </div>
            <button type="submit">Sign In</button>
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
