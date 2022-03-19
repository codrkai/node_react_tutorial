//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Tweet from './components/Tweet';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/tweets" exact element={<Tweet/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
