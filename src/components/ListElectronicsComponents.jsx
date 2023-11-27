import React, { Component } from 'react'
import ElectronicsService from '../services/ElectronicsService';
import {withRouter} from 'react-router-dom'

class ListElectronicsComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electronics: [],
    };
    this.addelectronics=this.addelectronics.bind(this);
  }

  componentDidMount(){
    ElectronicsService.getelectronics().then(res =>
        this.setState({ electronics: res.data })
    );
  }
  addelectronics(){
    this.props.history.push('/AddElectronics');
    this.props.history.go();
  }

  cancel(){
    this.props.history.push('/Electronics');
    this.props.history.go();
  }

  deleteelectronics(id){
    ElectronicsService.deleteElectronics(id).then( res => {
        this.setState({ele: this.state.electronics.filter(electronics => electronics.id !== id)});
        this.props.history.push('/Electronics');
        this.props.history.go();
    });
}
viewEmployee(id){
    this.props.history.push(`/view-electronics/${id}`);
}
editEmployee(id){
    this.props.history.push(`/add-electronics/${id}`);
}



addEmployee(){
    this.props.history.push('/add_electronics');
}


  render(){
    return(       
      <div>
        <h3 className="page-header">Electronics List</h3>
       
        <div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                {/* <th>#</th> */}
                <th text="10px">Product</th>
                <th>Price</th>
                <th>Store</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.electronics.map(electronics => (
                <tr key={electronics.id}>
                  {/* <td> {electronics.id}</td>   */}
                  <td> {electronics.product}</td>
                  <td> ${electronics.price}</td>
                  <td> {electronics.store}</td>
                  <td> <button type="button" class="btn btn-info"  onClick={ () => this.deleteelectronics(electronics.id)} className="btn btn-danger">Delete </button>
                  <button type="button" class="btn btn-info" onClick={this.addelectronics} style={{marginLeft: "10px"}} >Update</button></td>
                  

                  
                </tr>
                
              )
              )}
              
             
               {/* <div class="Btn-style">
           <span>  <button className='Btn-style' onClick={this.addelectronics}>Add Electronics</button> </span>
            </div>  */}
         <div class="container bg-light">
        <div class="col-md-12 text-center">
            <button type="button" class="btn btn-primary" onClick={this.addelectronics}>Add Electronics</button>
            
        </div>
        </div>
             
            </tbody>
          </table>
        </div>
      </div>
    );
  }
//   // render() {
//   //   return (
//   //       <div>
//   //            <h2 className="text-center">Electronics List</h2>
//   //            <div className = "row">
//   //               <button className="btn btn-primary" onClick={this.addElectronics}> Add Electronics</button>
//   //            </div>
//   //            <br></br>
//   //            <div className = "row">
//   //                   <table className = "table table-striped table-bordered">

//   //                       <thead>
//   //                           <tr>
//   //                             <th>Product</th>
//   //                             <th>Price</th>
//   //                             <th>Store</th>
//   //                             <th>Actions</th>
//   //                           </tr>
//   //                       </thead>
//   //                       <tbody>
//   //                           {
//   //                               this.state.electronics.map(
//   //                                 electronics => 
//   //                                   <tr key = {electronics.id}>
//   //                                       <td> {electronics.product}</td>
//   //                                       <td> ${electronics.price}</td>
//   //                                       <td> {electronics.store}</td>
//   //                                        <td>
//   //                                            <button onClick={ () => this.editElectronics(electronics.id)} className="btn btn-info">Update</button>
//   //                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteElectronics(electronics.id)} className="btn btn-danger">Delete </button>
//   //                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewElectronics(electronics.id)} className="btn btn-info">View </button>
//   //                                        </td>
//   //                                   </tr>
//   //                               )
//   //                           }
//   //                       </tbody>
//   //                   </table>

//   //            </div>

//   //       </div>
//     )
// }
}



export default ListElectronicsComponents;