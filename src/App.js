import Nav from "./components/Pages/Navbar/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Education from "./components/Pages/Education/Education";
import Contacts from "./components/Pages/Contacts/Contacts";
import About from "./components/Pages/About/About";
import Skills from "./components/Pages/Skills/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Nav />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Education" component={Education} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Contacts" component={Contacts} />
          </div>
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
