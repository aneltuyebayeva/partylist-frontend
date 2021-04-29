import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {useState, useEffect, useContext} from 'react'
import {UserContext} from './context/UserContext'
import {Route, Redirect} from 'react-router-dom'
import AllListings from './pages/AllListings';
import MyListings from './pages/MyListings';
import CreateListing from './pages/CreateListing';
import Signup from './pages/Signup'
import Login from './pages/Login'
import SocialFollow from "./components/SocialFollow"

function App() {

  const { userState, fetchUser } = useContext(UserContext)
  const [user, setUser] = userState

  return (
    <div className="App">
      <Navbar/>
      <Route path="/" exact
        render={() => {
          return <Home />
        }}
      />
      <Route path="/signup" render = {() => {
        if (user.id) {
          return <Redirect to="/" exact />
        } else {
          return <Signup />
        }
      }}  />
      <Route path="/login" render = {() => {
        if (user.id) {
          return <Redirect to="/" exact />
        } else {
          return <Login />
        }
      }}  />
      <Route path="/listings" exact
        render={() => {
          return <AllListings />
        }}
      />

      <Route path="/mylistings" exact
        render={() => {
          return <MyListings />
        }}
      />
      <Route path="/create" exact
        render={() => {
          return <CreateListing />
        }}
      />
      
    </div>
  );
}

export default App;
