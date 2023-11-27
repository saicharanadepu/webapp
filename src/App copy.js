import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListElectronicsComponents from './components/ListElectronicsComponents.jsx';
import AddElectronicsComponent from './components/AddElectronicsComponent.jsx';
import Headercomponent from './components/Headercomponent.jsx';
import Footercomponent from './components/Footercomponent.jsx';

function App() {
  return (
    <div>
      <Router>
        <Headercomponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListElectronicsComponents}></Route>
            <Route
              path="/electronics"
              component={ListElectronicsComponents}
            ></Route>
            <Route
              path="/AddElectronics"
              component={AddElectronicsComponent}
            ></Route>
          </Switch>
        </div>
        <Footercomponent />
      </Router>
    </div>
  );
}

export default App;
