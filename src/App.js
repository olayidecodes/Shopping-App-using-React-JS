import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        {/* React Router */}
        <Switch>
        
        {/* Contact Us */}
          <Route path="/contact">
            <h1>Contact Us</h1>
          </Route>
        {/* About us */}
          <Route path="/about">
            <h1>About Us</h1>
          </Route>
          {/* Home Page */}
          <Route path="/">
            <Home />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
