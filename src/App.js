import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact-us";
import Diets from "./components/Diets";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Services from "./components/Services";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import Reset from "./components/Reset";
import Cards from "./components/Card";
import DashboardNav from "./components/Dashboard_Nav";
import Exercise from "./components/Exercise";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/exercises">
              <Header />
              <Exercise />
              <Footer />
            </Route>

            <Route path="/reset">
              <Header />
              <Reset />
              <Footer />
            </Route>

            <Route path="/register">
              <Header />
              <SignUp />
              <Footer />
            </Route>

            <Route path="/dashboard">
              <DashboardNav />
              <Dashboard />
            </Route>

            <Route path="/premium">
              <Header />
              <SignIn />
              <Footer />
            </Route>

            <Route path="/contact">
              <Header />
              <Contact />
              <Footer />
            </Route>

            <Route path="/gallery">
              <Header />
              <Gallery />
              <Footer />
            </Route>

            <Route path="/services">
              <Header />
              <Services />
              <Footer />
            </Route>

            <Route path="/diets">
              <Header />
              <Diets />
              <Footer />
            </Route>

            <Route path="/about">
              <Header />
              <About />
              <Cards />
              <Footer />
            </Route>

            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
