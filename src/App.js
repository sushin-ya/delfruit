import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contents from "./components/Contents/Contents";
import MobileMenu from "./components/MobileMenu/MobileMenu"

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Contents />
        <Footer />
      </div>
      <MobileMenu />
    </div>
  );
}

export default App;
