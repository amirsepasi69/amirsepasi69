import './App.css';
import Student from "./components/Student";
import GroupAdmin from "./components/GroupAdmin";
import GeneralAdmin from "./components/GeneralAdmin";
import EditStudyGroup from "./components/EditStudyGroup";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SingleCourse from "./components/SingleCourse";
import SingleStudyGroup from "./components/SingleStudyGroup";
import Home from "./components/Home";
import MeetingSignup from './components/MeetingSignup';


function App() {
  return (
  
    <Router>
    <Switch>
     <Route path="/" component={Home} exact/>
     <Route path="/Student" component={Student}/>
     <Route path="/singlecourse" component={SingleCourse} />
     <Route path="/groupadmin" component={GroupAdmin} />
     <Route path="/editstudygroup" component={EditStudyGroup} />
     <Route path="/singlestudygroup" component={SingleStudyGroup} />
     <Route path="/meetingsignup" component={MeetingSignup} />
     <Route path="/generaladmin" component={GeneralAdmin} />
     </Switch>
     </Router>
     
  
  );
}

export default App;
