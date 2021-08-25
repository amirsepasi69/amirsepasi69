import React, { useState } from "react";
import studyGroupService from "../services/StudyGroupsService";
// import SingleCourse from "../components/SingleCourse";
// import { Grid, Button } from "@material-ui/core";






const SingleStudyGroup = () => {
    const [studyGroups, setStudyGroups] = useState([]);

    const getData = () => {
        studyGroupService
          .getStudyGroups()
          .then((data) => {
            let data2 = [...data]
            setStudyGroups(data2);
            console.log("data2: ", data2);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };    
      // getData();
      React.useEffect(getData, []);
    //   console.log("courses: ", courses);
   
     
   
    return (  

        <>
           <h2>Name: </h2>
          {studyGroups.map((studygroup) => (
              <>
             
            
                <h3>{studygroup.name}</h3>
            </>
          ))}
        </>
    );
}
 
export default SingleStudyGroup;