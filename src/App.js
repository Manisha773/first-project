import React  from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Navbar from './NAVBAR/Navbar';
import {BrowserRouter  as Router,Switch,Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Templates from './components/pages/Templates';
//import Beginner from './components/pages/Beginner';
import ForgotPassword from './components/pages/ForgotPassword';
import SigninF from './components/pages/SigninF';
import Logout from './components/pages/Logout';
import myResume from './components/pages/MyResume';
import EditForm from './components/EditForm'
import Test from './components/Test'
import NewEditForm from './New/NewEditForm'
import Formats from './New/Formats'

function App() {


  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/templates' exact component={Templates}/>
        <Route path='/beginner' exact component={Formats}/>
        <Route path='/logout' exact component={Logout}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/profile/myprofile' exact component={myResume}/>
        <Route path='/sign-in' exact component={SignIn}/>
        <Route path='/forgotpassword' exact component={ForgotPassword}/>
        <Route path='/SigninF' exact component={SigninF}/>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/editform' exact component={EditForm} />
        {/* <Route path='/' exact component={Test}/> */}
      </Switch>
    </Router>
  );
}

export default App;
