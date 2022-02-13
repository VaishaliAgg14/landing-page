import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Info />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
