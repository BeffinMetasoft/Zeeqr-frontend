import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage  from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<SignupPage/>} />
      </Routes>
    </Router>
  );
}

export default App;