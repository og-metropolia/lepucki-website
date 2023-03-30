import './App.css';
import Home from './pages/Home';
import Login from './components/Login';
import Pyykkitupa from './pages/Pyykkitupa';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import path from './constants/path';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={path.home}>
            <Home />
          </Route>
          <Route path={path.login}>
            <Login />
          </Route>
          <Route path={path.pyykkitupa}>
            <Pyykkitupa />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
