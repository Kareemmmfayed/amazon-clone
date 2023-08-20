import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/checkout' />
          <Route path='/login' />
          <Route path='/' element={<Header />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
