import './App.css';
import Nav from './componenets/Nav/Nav';
import HomeHeader from './componenets/Home/HomeHeader';
import HomeContent from './componenets/Home/HomeContent';
import Footer from './componenets/Footer';
import logo from './logo.svg';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <HomeHeader title="Welcome to Little League" logo={logo} />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default App;
