import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import "./index.css"
import { USER } from "../../utils/constants"


const Signin = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [navigateUser, setnavigateUser] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(username)
        if (username === USER.username && password === USER.password)
            setnavigateUser(true);
    }

    return (
        <div className="form">
            {navigateUser && <Redirect to="/home" />}
            <form className="m-4 form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="username"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setusername(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => setusername(e.target.value)}
                    />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        onChange={(e) => setusername(e.target.value)}
                    />
                    <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Signin;