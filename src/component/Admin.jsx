import React from 'react'
import { Link } from 'react-router-dom';


const Admin = props => {
    const { products }= props;
    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-3"></div>
                <button className="col-6 btn btn-primary m-2" 
                onClick={()=>props.history.push("/productForm/new")}
                >Add</button>
            </div>
             <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                    {products.map(p=>
                        <tr key={p.id}>
                            <th scope="row">{p.Name}</th>
                            <td>{p.price}</td>
                            <td>
                                <Link to={`/productForm/${p.id}`}>
                                    <span style={{cursor:"pointer"}}>
                                        <i className="fas fa-edit"></i>
                                    </span>
                                </Link>
                            </td>
                            <td>
                                <span style={{cursor:"pointer"}} onClick={() => props.onDelete(p)}>
                                    <i className="fas fa-trash m-2"></i>
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </React.Fragment>
     );
}
 
export default Admin;