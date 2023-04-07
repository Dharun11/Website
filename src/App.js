import NavBar from "./components/NavBar";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Wiki from "./components/pages/Wiki";
import Blog from "./components/pages/Blog";
import Metrics from "./components/pages/Metrics";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Metrics" component={Metrics} />
          <Route path="/wiki" component={Wiki} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
