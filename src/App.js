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
      <div className={mobileState ? "container mobileOpen" : "container"}>
        <div
          className={
            mobileState ? "mobileMenuCover mobileOpen" : "mobileMenuCover"
          }
          onClick={mobileToggle}
        />
        <div className='navTrigger' ref={ref} />
        <Header inview={!inView} mobileToggle={mobileToggle} />
        <Contents />
        <Footer />
      </div>
      <MobileMenu mobileState={mobileState} />
    </div>
  );
}

export default App;
