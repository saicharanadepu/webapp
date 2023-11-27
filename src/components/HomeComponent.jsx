import React, { Component } from 'react';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          home: [],
        };
        
      }
    
    //   componentDidMount(){
    //     KitchenService.getkitchenitems().then(res =>
    //         this.setState({kitchen: res.data })
    //     );
    //   }
    
    render() {
        return (
            <div>
                
            </div>

        );
    }
}

export default HomeComponent;
