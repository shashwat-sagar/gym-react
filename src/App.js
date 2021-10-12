import Navbar from './components/Navbar'
import VideoMiddle from './components/VideoMiddle'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Signup from './components/Signup'
import Signin from './components/Signin'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Gallery from './components/Gallery';

function App() {
  return (
      <Router>
        <div className="app">
        <Switch>

        <Route path="/about">
            <Navbar />
            <About />
            <Footer />
        </Route>


        <Route path="/services">
            <Navbar />
            <Services />
            <Footer />
        </Route>


        <Route path="/gallery">
            <Navbar />
            <Gallery />
            <Footer />
        </Route>


        <Route path="/contact">
            <Navbar />
            <Contact />
            <Footer />
        </Route>
          
        <Route path="/signup">
            <Navbar />
            <Signup />
            <Footer />
        </Route>

        <Route path="/signin">
            <Navbar />
            <Signin />
            <Footer />
        </Route>

        <Route path="/">
            <Navbar />
            <VideoMiddle />
            <Carousel />
            <Footer />
        </Route>

        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
