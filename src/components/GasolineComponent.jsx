import React, { Component } from 'react'
import GasolineService from '../services/GasolineService';

class GasolineComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gasoline: [],
    }
  }

  componentDidMount(){
    GasolineService.getgasoline().then(res =>
        this.setState({ gasoline: res.data })
    );
  }
  
  render(){
    return(       
      <div>
        <h2 className="page-header">Gasoline List</h2>
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Store</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.gasoline.map(gasoline => (
                <tr key={gasoline.id}>
                  <td> {gasoline.id}</td>  
                  <td> {gasoline.product}</td>
                  <td> ${gasoline.price}</td>
                  <td> {gasoline.store}</td>
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



export default GasolineComponent;