import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddDestination from './components/AddDestination/AddDestination';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageDestinations from './components/ManageDestinations/ManageDestinations';
import MyDestinations from './components/MyDestinations/MyDestinations';
import NotFound from './components/notFound/notFund';
import SinglePlace from './components/SinglePlace/SinglePlace';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/add-destination">
              <AddDestination></AddDestination>
            </PrivateRoute>
            <PrivateRoute path="/places/:id">
              <SinglePlace></SinglePlace>
            </PrivateRoute>
            <PrivateRoute path="/manage-destinations">
              <ManageDestinations></ManageDestinations>
            </PrivateRoute>
            <PrivateRoute path="/my-destinations">
              <MyDestinations></MyDestinations>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
