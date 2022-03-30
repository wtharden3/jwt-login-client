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

  const setAuth = boolean => {
    setIsAuth(boolean);
  }
  return (
    <div className="App">
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
          <Route path="/login" element={isAuth ? <Navigate replace to="/dashboard" /> : <Login setAuth={setAuth}/>} />
          <Route path="/register" element={<Register setAuth={setAuth} />} />
          <Route path="/dashboard" element={isAuth ? <Dashboard setAuth={setAuth}/> : <Navigate replace to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
