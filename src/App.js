import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage  from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import UpdateDetailsPage from './pages/UpdateDetailsPage';
import SuccessPage from './pages/SuccessPage';
import ProfilePage from './pages/ProfilePage';
import SavedCardsPage from './pages/SavedCardsPage';
import BookedCardsPage from './pages/BookedCardsPage';
import CardDetailsViewPage from './pages/CardDetailsViewPage';
import Error404Page from './pages/Error404Page';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<LandingPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/update-details' element={<UpdateDetailsPage/>} />
        <Route path='/order-success' element={<SuccessPage/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/saved-cards' element={<SavedCardsPage/>} />
        <Route path='/booked-cards' element={<BookedCardsPage/>} />
        <Route path='/detail-view/:id' element={<CardDetailsViewPage/>} />
        <Route path='/error-404' element={<Error404Page/>} />
      </Routes>
    </Router>
  );
}

export default App;
