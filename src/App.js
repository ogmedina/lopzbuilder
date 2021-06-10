import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <HashRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact component={NoMatch} />
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
