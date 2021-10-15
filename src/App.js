import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
    <div className="app">
    <NavBar />
      
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/contact" component={Contact} />
       
      
        
     
        <Footer />
    </div>
    </Router>
  );
}

export default App;
