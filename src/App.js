import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact component={NoMatch} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
