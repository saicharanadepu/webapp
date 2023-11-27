import React, { Component } from 'react'
import GroceriesService from '../services/GroceriesService';;

class GroceriesComponents extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
     
    }; 
    this.qty=0;
    this.num1=0;
    this.num2=0;
    this.result=0;
  }
   

  componentDidMount(){
    GroceriesService.getgroceries().then(res =>
        this.setState({ groceries: res.data })
    );
  }

      getqty = (e) => {
         this.qty=e.target.value;
         this.qty=parseInt(this.qty);
         return (this.qty);
      };


       addvalues()
      {
   
         let num1 = parseInt(document. getElementById("qty"). value);
         let num2 = document. getElementsByName("price"). value; 
         let result= document. getElementById("result"). innerHTML = num1 * num2;
}
   
  render(){
    return(       
      <div>
        <h2 className="page-header">Groceries List</h2>
        <div className='row'>
        
            </div> 
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Product</th>
                <th>Store</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.groceries.map(groceries => (
                <tr key={groceries.id}>
                  {/* <td> {groceries.id}</td>   */}
                  <td> {groceries.product}</td>
                  <td> {groceries.store}</td>
                  <td className="price" id="price"> ${groceries.price}</td>
                  <td>
                      <input
                        placeholder="enter your qty" id="qty"  onChangeCapture={this.addvalues}
                      />
                    </td>
                  <td>${this.result}
                   </td>
                   <td> </td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}



export default GroceriesComponents;