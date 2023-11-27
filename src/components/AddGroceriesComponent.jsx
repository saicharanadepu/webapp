import React, { Component } from 'react';
import GroceriesService from '../services/GroceriesService';
import {withRouter} from 'react-router-dom'

class AddGroceriesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
            product:'',
            price: '',
            store:''

    };
    this.changeproductHandler=this.changeproductHandler.bind(this);
    this.changepriceHandler=this.changepriceHandler.bind(this);
    this.changestoreHandler=this.changestoreHandler.bind(this);
    

  }
  changeproductHandler= (event) => {
    this.setState({product: event.target.value});
  }
    
  

  changepriceHandler =(event) =>{
    this.setState({price: event.target.value});
  }

  changestoreHandler= (event) =>{
    this.setState({store: event.target.value});
  }

  cancel=(e) =>{
    e.preventDefault();
    this.props.history.push("/AddGroceriesComponent");
    this.props.history.go();
  }

  saveGroceries= (e) => {
    e.preventDefault();
    let groceries={price: this.state.price, product: this.state.product, store:this.state.store}
    console.log('kitchenItems' + JSON.stringify(groceries));

    GroceriesService.addgroceries(groceries).then(res => {
      this.props.history.push("/groceries");
      this.props.history.go();
    });
  }

  addkitchenItem(){
    this.props.history.push('/AddGroceriesComponent');
    this.props.history.go();
  }

  componentDidMount(){
    GroceriesService.getkitchenitems().then(res =>
        this.setState({ kitchenitem: res.data })
    );
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div>
              <h3> Add Groceries</h3>
                   <div className='card-body'></div>

                      <form>
                          <div className='form-group'>
                            <label  >Product Name:</label>
                            <input placeholder='Enter Product Name' name="product" className='form-control' 
                            value={this.state.product} 
                           onChange={this.changeproductHandler}
                            ></input>
                            </div>
                            <div className='form-group'>
                            <label  >Price:</label>
                          <input placeholder='Enter Price' name="price" className='form-control' 
                            value={this.state.price} 
                             onChange={this.changepriceHandler}
                            ></input>
                          </div>

                          <div className='form-group'>
                            <label  >Store:</label>
                          <input placeholder='Enter Store Name' name="store" className='form-control' 
                            value={this.state.store} onChange={this.changestoreHandler}></input>
                          </div>
                          <button className='btn btn-info' onClick={this.saveKitchenItem}>Save</button>
                          <button className='btn btn-danger' onClick={this.cancel} style={{marginLeft: "100px"}} >Cancel</button>
                      </form>
          </div>
        </div> 
      </div>
    );
  }
}

export default AddGroceriesComponent;