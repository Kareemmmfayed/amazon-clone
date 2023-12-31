import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
          <Route path='/amazon-clone' element={<Home />}/>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
