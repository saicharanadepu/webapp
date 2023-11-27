import React, { Component } from 'react';

class Headercomponent extends Component {
     
        constructor(props){
            super(props)
             this.state={
            }
        }
        render(){
          return (
            <div>
     <ul className="nav nav-pills nav-justified">
              <li className="nav-item">
              <a className="nav-item" href="http://localhost:3000" title ="Sasta me milega" > <img className='App-logo' alt="" src="https://www.outdoorjournal.com/in/wp-content/uploads/sites/2/picture.jpeg" /> BestToBuyIn</a>
             

                </li>
  <li className="nav-item">
    <a className="nav-item" href="/Electronics" title ="Electronics" >Electronics</a>
  </li>
  <li className="nav-item">
    <a className="nav-item" title ="Groceries" href="/groceries">Groceries</a>
  </li>
  <li className="nav-item">
    <a className="nav-item" title ="KitchenItems" href="/kitchenItems">Kitchen Items</a>
  </li>
  <li className="nav-item">
    <a className="nav-item" title ="Gasoline" href="/gasoline">Gasoline</a>
  </li>
</ul>
            </div>
        );
        }
        }


export default Headercomponent;
   
