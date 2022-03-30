import { Fragment, useState } from "react";

const Register = ({setAuth, token, setToken}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [token, setToken] = useState('');


  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const url = `http://localhost:4848/auth/register`;
      const bodyObj = {
        name,
        email,
        password
      };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObj)
      });

      const data = await response.json();
      console.log(data);
      setToken(data.token);
      setAuth(data.token);
      
    } catch (err) {
      console.error(`[CLIENT 👋🏽]: ${err.message}`);
      
    }


  }

  return(
    <Fragment>
      <h2 className="my-3">Register</h2>
      <p className="my-5">token={token}</p>
      <form onSubmit={e => handleSubmit(e)}>
        <input 
          type="text" 
          name="fullName" 
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="form-control my-3"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="form-control my-3"
        />
        <input 
          type="password" 
          name="password" 
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="form-control my-3"
        />
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
    </Fragment>
  );
}

export default Register;