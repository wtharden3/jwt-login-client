import { Fragment } from "react";

const Dashboard = ({setAuth}) => {
  return(
    <Fragment>
      <h1>Dashboard</h1>
      <button onClick={() => setAuth(false)}>UN-Authenticate</button>
    </Fragment>
  );
}

export default Dashboard;