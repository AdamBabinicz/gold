import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ScrollToTop from "./ScrollToTop";
import Scroll from "./Scroll";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Scroll />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/kontakt" component={Contact} exact></Route>
        <Redirect to="/"></Redirect>
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
