import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');

  const setAuth = boolean => {
    setIsAuth(boolean);
  }
  return (
    <div className="App container">
      <Router>
        <h1>Home</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li> <Link to="/dashboard">Dashboard</Link></li>
          </ul> 
        </nav>
        <Routes>
          <Route path="/" element={<div>Home</div>}></Route>
          <Route path="/login" element={isAuth ? <Navigate replace to="/dashboard" /> : <Login setAuth={setAuth} setToken={setToken}/>} />
          <Route path="/register" element={<Register setAuth={setAuth} token={token} setToken={setToken}/>} />
          <Route path="/dashboard" element={isAuth ? <Dashboard token={token} setToken={setToken}/> : <Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
