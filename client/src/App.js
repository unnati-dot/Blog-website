import './App.css';
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Singleposts from "./Pages/singleposts/Singleposts"
import Write from "./Pages/write/Write"
import Settings from "./Pages/settings/Settings"
import Login from "./Pages/login/Login"
import Register from "./Pages/register/Register"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  const currentUser=true;
  return (
    
    <Router>
      <Navbar/>
      <Switch>
      
          <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home/> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Singleposts />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
     
       </Switch>
    </Router>
  
  );
}

export default App;
