import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {useContext} from 'react'
import {UserContext} from './context/UserContext'
import {Route, Redirect} from 'react-router-dom'
import AllListings from './pages/AllListings';
import MyListings from './pages/MyListings';
import CreateListing from './pages/CreateListing';
import SingleListing from './pages/SingleListing';
import Signup from './pages/Signup'
import Login from './pages/Login'
import EditForm from "./components/EditForm"
import ReviewForm from "./components/ReviewForm"

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
      <Route
        path="/listings/:id"
        exact
        render={(routingInfo) => {
          return <SingleListing id={routingInfo.match.params.id} />
        }}
      />

      <Route
        path="/mylistings/:id/edit"
        exact
        render={(routingInfo) => {
          return <EditForm id={routingInfo.match.params.id} />
        }}
      />  

      <Route
        path="/listings/:id/reviews"
        exact
        render={(routingInfo) => {
          return <ReviewForm id={routingInfo.match.params.id} />
        }}
      /> 
      
    </div>
  );
}

export default App;
