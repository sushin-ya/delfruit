import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contents from "./components/Contents/Contents";
import { useInView } from "react-intersection-observer";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import { useState } from "react";

function App() {
  const [ref, inView] = useInView({ initialInView: true });
  const [mobileState, setMobileState] = useState(false);

  function mobileToggle() {
    setMobileState(!mobileState);
  }

  return (
    <div className='App'>
      <div className='navTrigger' ref={ref} />
      <div className={mobileState ? "container mobileOpen" : "container"}>
        <Header inview={!inView} mobileToggle={mobileToggle} />
        <Contents />
        <Footer />
      </div>
      <MobileMenu />
    </div>
  );
}

export default App;
