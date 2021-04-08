import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import EditProduct from './components/EditProducts/EditProduct';
import Checkout from './components/CheckOut/Checkout';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    message: '',
    id:''

})
  return (
    <div>
        <UserContext.Provider  value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header></Header>
            <Switch>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/editProduct">
                <EditProduct/>
              </Route>
              <PrivateRoute path="/checkout/:productId">
                <Checkout/>
              </PrivateRoute>
              <PrivateRoute path="/order">
                <Order/>
              </PrivateRoute>
              <PrivateRoute path="/admin">
                <Admin/>
              </PrivateRoute>              
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="*">
                  <NotFound/>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
    </div>
  );
}

export default App;
