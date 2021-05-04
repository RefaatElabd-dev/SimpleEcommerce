import axios from 'axios';
import React, { Component } from 'react';

class UpdateProduct extends Component {
    state = {
        Name:"",
        price:"",
        id:""
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        if(id !== "new"){
            const { data } = await axios.get("http://localhost:3000/products/" + id);
            const state = { ...this.state };
            state.Name = data.Name;
            state.price = data.price;
            state.id = data.id;
            this.setState(state);
        }
    }

    handleChange = e =>{
        let state = { ...this.state };
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
    }

    handleSubmit= async e =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const obj = {
            ...this.state,
            count:0,
            selected:false
        }
        delete obj.id;
        if(id === "new"){
             //Add
             await axios.post("http://localhost:3000/products",obj);
        }else{
            //Edit
            await axios.put("http://localhost:3000/products/"+this.state.id, obj);
        }
        this.props.history.replace("/admin");
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                <h1>{(this.props.match.params.id !== "new")?"Update Product":"Add Product"}</h1>

                    <form  onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="Name">product Name</label>
                            <input 
                            name="Name"
                            value={this.state.Name}
                            onChange={this.handleChange}
                            type="text" className="form-control" id="Name" placeholder="Enter Product Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">price</label>
                            <input
                            name="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                            type="text" className="form-control" id="price" placeholder="price" />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">{(this.props.match.params.id !== "new")?"Update Product":"Add"}</button>
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default UpdateProduct;