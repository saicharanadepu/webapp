import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListElectronicsComponents from './components/ListElectronicsComponents.jsx';
import AddElectronicsComponent from './components/AddElectronicsComponent.jsx';
import Headercomponent from './components/Headercomponent.jsx';
import Footercomponent from './components/Footercomponent.jsx';
import GroceriesComponents from './components/GroceriesComponent';
import KitchenComponent from './components/KitchenComponent';
import GasolineComponent from './components/GasolineComponent';
import HomeComponent from './components/HomeComponent';
import AddKitchenItemComponent from './components/AddKitchenItemComponent';
import AddGroceriesComponent from './components/AddGroceriesComponent';

function App() {
  return (
    <div>
      <Router>
        <Headercomponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route
              path="/electronics"
              component={ListElectronicsComponents}
            ></Route>
            <Route
              path="/AddElectronics"
              component={AddElectronicsComponent}
            ></Route>
            <Route path="/groceries" component={GroceriesComponents}></Route>
            <Route path="/gasoline" component={GasolineComponent}></Route>
            <Route path="/kitchenItems" component={KitchenComponent}></Route>
            <Route
              path="/AddKitchenItem"
              component={AddKitchenItemComponent}
            ></Route>
            <Route
              path="/AddGroceries"
              component={AddGroceriesComponent}
            ></Route>
          </Switch>
        </div>
        <Footercomponent />
      </Router>
    </div>
  );
}

export default App;
