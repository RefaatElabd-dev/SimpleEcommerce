import React, { Component } from 'react';
 import Joi from "joi-browser";

class Login extends Component {
    state = { 
        username:"",
        password:"",
        errors:{},
     }
    // username = React.createRef();
    handleChange = e =>{
        
        let state = { ...this.state };
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
        console.log(this.state)
    }

    schema = {
        username : Joi.string().required(),
        password : Joi.string().required(),
    }

    handleSubmit= e =>{
        e.preventDefault();
        
        const errors = this.validate();

        if(errors) return;

        console.log("submit " );
    }



    validate = ()=>{
        const errors={};
        const state = { ...this.state };
        delete state.errors;
        
        const res = Joi.validate(state , this.schema, { abortEarly: false });
        console.log(res);

        if(res.error === null){
            this.setState({errors: {}});
            return null;
        }

        for (const error of res.error.details) {
            errors[error.path] = error.message;
        }

        this.setState({errors});
    };
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <h1>Login</h1>

                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Email address</label>
                            <input 
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            // ref={this.username}
                            type="text" className="form-control" id="username" placeholder="Enter Username" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                        </div>
                        { this.state.errors.username && (<div className="alert alert-danger">
                            {this.state.errors.username}
                        </div>)}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                             type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        { this.state.errors.password && (<div className="alert alert-danger">
                            {this.state.errors.password}
                        </div>)}
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