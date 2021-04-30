import React, { Component } from 'react';

class Login extends Component {
    state = {  }
    username = React.createRef();
    handleSubmit= e =>{
        e.preventDefault();
        const user = this.username.current.value;
        console.log("submit : " + user);
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <h1>Login</h1>

                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Email address</label>
                            <input 
                            ref={this.username}
                            type="text" className="form-control" id="username" placeholder="Enter Username" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
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
                </div>
            </React.Fragment>
         );
    }
}
 
export default Login;