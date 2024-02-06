import "./App.css";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import ProductListing from "./components/ProductListing";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ProductListing />
      <Footer />
    </div>
  );
}

export default App;
