import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Layout from "./Layout";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
