import React from 'react';

const Menu = props => {
    const { products, onSelect, history }= props;
    const colorHandle=(val)=>val?"text-success":"text-dark";
    const sell=()=>{history.push('/cart')}
    
    return ( 
        <React.Fragment>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Select</th>
                </tr>
                </thead>
                <tbody>
                    {products.map(p=>
                        <tr key={p.id}>
                            <th scope="row">{p.id}</th>
                            <td>{p.Name}</td>
                            <td>{p.price}</td>
                            <td>
                                <span style={{cursor:"pointer"}} onClick={()=>onSelect(p)}>
                                    <i className={`fas fa-shopping-cart ${colorHandle(p.selected)}`} ></i>
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="row">
                <div className="col-3"></div>
                <button className="col-6 btn btn-success m-2" onClick={sell}>Go To Shopping Cart</button>
            </div>
        </React.Fragment>
        
  );
}
 
export default Menu;