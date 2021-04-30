import React, { Component } from 'react';

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <form method="get">
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter Username" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check" />
                        <label className="form-check-label" htmlFor="check">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default Login;