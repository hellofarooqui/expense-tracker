import axios from 'axios';
import React, { useState } from 'react'

const Login = ({setToken}) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleLogin = async (e) => {

        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
        } catch (error) {
          console.error("Login error:", error.response?.data?.message || error.message);
          alert("Login failed—check email/password!");
        }
      };

    return (
        <div style={{ padding: "20px" }}>
          <h1>Expense Tracker - Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              placeholder="Email"
              style={{ display: "block", margin: "10px 0" }}
            />
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="Password"
              style={{ display: "block", margin: "10px 0" }}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      );
}

export default Login