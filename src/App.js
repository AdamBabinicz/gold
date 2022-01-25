import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ScrollToTop from "./ScrollToTop";
import Scroll from "./Scroll";
import CookieConsent from "react-cookie-consent";
// import Footer from "./components/Footer";

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
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
      {/* <Footer /> */}
    </>
  );
}

export default App;
