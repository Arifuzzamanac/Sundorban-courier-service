import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddService from './Home/AddService/AddService';
import Home from './Home/Home/Home';
import Myservices from './Home/Myservices/Myservices';

import Booking from './Login/Booking';
import Login from './Login/Login';
import PrivateRouter from './Login/PrivateRouter/PrivateRouter';

import NotFound from './NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRouter path='/Booking/:ServiceId'>
              <Booking></Booking>
            </PrivateRouter>
            <Route path='/addservice'>
              <AddService></AddService>
            </Route>
            <Route path='/myservice'>
              <Myservices></Myservices>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
