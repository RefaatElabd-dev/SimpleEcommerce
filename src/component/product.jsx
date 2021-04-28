import React, { Component } from 'react';

class Product extends Component {
    state = { 
        product:{
            name:this.props.product.Name,
            count:this.props.product.count,
        }
     }

    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                    <div className="col-2 text-center">
                        <span>{this.state.product.name}</span>
                    </div>
                    <div className="col">
                        <span className="badge badge-primary m-2">{this.props.product.count}</span>
                        <button className="btn btn-primary btn-sm m-2" onClick={()=>this.props.onIncrement(this.props.product)}>+</button>
                        <span style={{cursor:"pointer"}} onClick={()=>this.props.onDelete(this.props.product)}>
                            <i className="fas fa-trash m-2"></i>
                        </span>
                    </div>
                </div>
                
                
            </React.Fragment>
         );
    }
}
 
export default Product;