import './App.css';
import "react-alice-carousel/lib/alice-carousel.css"
import ChristmasHeader from "./components/christmasHeader/ChristmasHeader"
import {Route, Switch} from "react-router";
import ChristmasBody from "./components/ChristmasBody/ChristmasBody";


function App() {
  return (
    <div className="App">
      <ChristmasHeader/>
      <Switch>
          <Route path={"/"} component={ChristmasBody}/>
      </Switch>
    </div>
  );
}

export default App;
