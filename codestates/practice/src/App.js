// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';


function App() {
  return (
    <BrowserRouter>
      <ul>
      <Link to="/gallery"> <div>gallery</div></Link>
      <Link to="/about"><div>about</div></Link>
      </ul>
      <Gallery />
      <Switch>
        <Route exact path="/">
          안녕하세요
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
