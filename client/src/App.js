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


function App() {
  return (
  
    <Router>
    <Switch>
     <Route path="/Student" component={Student}/>
     <Route path="/singlecourse" component={SingleCourse} />
     <Route path="/groupadmin" component={GroupAdmin} />
     <Route path="/editstudygroup" component={EditStudyGroup} />
     </Switch>
     </Router>
     
  
  );
}

export default App;
