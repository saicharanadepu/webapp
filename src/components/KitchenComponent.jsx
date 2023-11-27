import React, { Component } from 'react'
import KitchenService from '../services/KitchenService';

class KitchenComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      kitchen: [],
    };
    this.addkitchen = this.addkitchen.bind(this)
    this.deletekitchen = this.deletekitchen.bind(this)
  }
 
  

  componentDidMount(){
    KitchenService.getkitchenitems().then(res =>
        this.setState({kitchen: res.data })
    );
  }
  deletekitchen(id){
    KitchenService.deletekitchen(id).then( res => {
        this.setState({ele: this.state.kitchen.filter(kitchen => kitchen.id !== id)});
        this.props.history.push('/kitchenItems');
        this.props.history.go();
    });
    
            }

            addkitchen(){
              this.props.history.push('/AddKitchenItem');
              this.props.history.go();
            }
  render(){
    return(       
      <div>
        <h2 className="page-header">Kitchen Items</h2>
               <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th>Product</th>
                <th>Price</th>
                <th>Store</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.kitchen.map(kitchen => (
                <tr key={kitchen.id}>
                  {/* <td> {kitchen.id}</td>   */}
                  <td> {kitchen.product}</td>
                  <td> ${kitchen.price}</td>
                  <td> {kitchen.store}</td>
                  <td> <button type="button" class="btn btn-info"  onClick={ () => this.deletekitchen(kitchen.id)} className="btn btn-danger">Delete </button>
                  <button type="button" class="btn btn-info" onClick={this.addelectronics} style={{marginLeft: "10px"}} >Update</button></td>
                </tr>
              )
              )}

        <div class="container bg-light">
        <div class="col-md-12 text-center">
            <button type="button" class="btn btn-primary" onClick={this.addkitchen}>Add Kitchen Item</button>
            
        </div>
        </div>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}



export default KitchenComponent;