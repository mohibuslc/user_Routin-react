
import './App.css';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetails from './Component/UserDetails/UserDetails';


function App() {


  return (
   
   
   
   <div>
     <Router>
       <Switch>
        
           <Route path="/home">
             <Home/>
           </Route>

           <Route path = "/userData/:userInformation">
            <UserDetails/>

           </Route>
           <Route exact path="/">
             <Home/>
           </Route>
           <Route path = "*">

             <NoMatch/>
           </Route>

         
       </Switch>
       </Router>
    </div>
  );
}

export default App;
