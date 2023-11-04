import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Signup from './pages/SignUp';
import Goals from './pages/Goals';

function App() {
  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}

export default App;
