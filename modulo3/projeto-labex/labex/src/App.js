import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminHomepage from './Pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from './Pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripePage from './Pages/CreateTripePage/CreateTripePage';
import HomePage from './Pages/HomePage/HomePage';
import ListTripsPage from './Pages/ListTripsPage/ListTripsPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import TripDetailsPage from './Pages/TripDetailsPage/TripDetailsPage';
import Router from './Router/Router';


function App() {
  return (
    <div>
      <header>
        <h2> LabeX</h2>
      </header>
      
      <Router />

    </div>
  );
}

export default App;
