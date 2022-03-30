import { Fragment } from "react";

const Dashboard = ({setAuth, setToken}) => {
  const handleLogOut = (bool) => {
    setAuth(false);
    setToken('');
    console.log(`did it`);
  }

  return(
    <Fragment>
      <h1>Dashboard</h1>
      <button onClick={() => handleLogOut(false)}>Logout</button>
    </Fragment>
  );
}

export default Dashboard;