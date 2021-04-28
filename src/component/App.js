import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import NavBar from './nav';
import Menu from './Menu';
import ShoppingCart from './shoppingCart';
import NotFound from './NotFound';


class App extends Component {
  state = { 
  products : [
    {id:1,Name:"chips", price:20, count:0, selected:false},
    {id:2,Name:"Cola", price:15, count:0, selected:false},
    {id:3,Name:"Burger", price:40, count:0, selected:false},
    {id:4,Name:"Frise", price:15, count:0, selected:false}
  ]
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
          <Route path='/cart' render={props=>(
            <ShoppingCart 
            products={this.state.products.filter(p=>p.selected)}
            onIncreament={this.incrementHandle}
            onDelete={this.select}
            {...props}
          />)}/>
          <Redirect from="/" to="/menu"/>
          <Redirect from="*" to='/notFound'/>
        </Switch>
      </React.Fragment>
     );
  }
}
 
export default App;