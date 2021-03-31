import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contents from "./components/Contents/Contents";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <Contents />
        <Footer />
      </div>
    </div>
  );
}

export default App;
