import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminHomepage from '../Pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripePage from '../Pages/CreateTripePage/CreateTripePage';
import HomePage from '../Pages/HomePage/HomePage';
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage';

function Router() {
    return (
        <BrowserRouter>

            <Switch>

                <Route exact path={'/'}>
                    <HomePage />
                </Route>

                <Route exact path={'/trips/list'}>
                    <ListTripsPage />
                </Route>

                <Route exact path={'/trips/application'}>
                    <ApplicationFormPage />
                </Route>

                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>

                <Route exact path={'/admin/trips/list'}>
                    <AdminHomepage />
                </Route>

                <Route exact path={'/admin/trips/create'}>
                    <CreateTripePage />
                </Route>

                <Route exact path={'/admin/trips/:id'}>
                    <TripDetailsPage />
                </Route>

            </Switch>

        </BrowserRouter>
    )
}

export default Router;

