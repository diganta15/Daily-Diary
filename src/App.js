import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import {AuthProvider} from './Auth';
import PrivateRoute from './PrivateRoute';
import './Main.css'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
