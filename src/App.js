import './App.css';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
