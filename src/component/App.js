import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import axios from 'axios';

import NavBar from './nav';
import Menu from './Menu';
import ShoppingCart from './shoppingCart';
import NotFound from './NotFound';
import Login from './login';
import Admin from './Admin';
import UpdateProduct from './updateProduct';
// import Product from './product';


class App extends Component {
  state = { 
    products : []
   }

   async componentDidMount(){
     const { data } = await axios.get("http://localhost:3000/products/");
    
     this.setState({products : data});
   }

   select=pro=>{
     //clone
     const products = [...this.state.products];
     const index = products.indexOf(pro);
     products[index] = {...products[index]};
     //Edit
     if(products[index].selected){
      products[index].selected = !products[index].selected;
      products[index].count = 0;
     }else{
      products[index].selected = !products[index].selected;
      products[index].count++;
     }
    //setState
    this.setState({products});
   }

   incrementHandle=pro=>{
      //clone
      const products = [...this.state.products];
      const index = products.indexOf(pro);
      products[index] = {...products[index]};
      //Edit
      products[index].count++;
     //setState
     this.setState({products});
   }

   handleDelete = async pro =>{
     const oldProducts = [ ...this.state.products ];
     const products = this.state.products.filter(p => p.id !== pro.id);
     this.setState({products});
     try{
       await axios.delete("http://localhost:3000/products/hkhk"+pro.id);
     }catch(ex){
      alert("can't delete");
      this.setState({ products : oldProducts });
     }
   }

  render() { 
    return ( 
      <React.Fragment>
        
        <NavBar total={this.state.products.filter(p=>p.selected).length}/>
        <Switch>
          <Route path='/notFound' component={NotFound}/>
          <Route path='/menu' render={props=>(
            <Menu
              products={this.state.products}
              onSelect={this.select}
              {...props}
            />
          )}/>
          
          <Route path='/admin' render={props=>(
            <Admin
              products={this.state.products}
              onDelete={this.handleDelete}
              {...props}
            />
          )}/>
          <Route path="/productForm/:id" component={UpdateProduct}/>
          <Route path='/cart' render={props=>(
            <ShoppingCart 
            products={this.state.products.filter(p=>p.selected)}
            onIncreament={this.incrementHandle}
            onDelete={this.select}
            {...props}
          />)}/>
          <Redirect from="/" exact to="/admin"/>
          <Redirect from="*" to='/notFound'/>
        </Switch>
      </React.Fragment>
     );
  }
}
 
export default App;