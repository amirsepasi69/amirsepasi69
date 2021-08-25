import React, { useState } from "react";
import studyGroupService from "../services/StudyGroupsService";
// import SingleCourse from "../components/SingleCourse";
// import { Grid, Button } from "@material-ui/core";
import SingleStudyGroup from "./SingleStudyGroup";




const StudyGroupStatus = ({code}) => {
// console.log("Props of Study Group Status:   ", props);

    const [studyGroups, setStudyGroups] = useState([]);
    const [arr, setArr] = useState([]);

    const getData = () => {
        studyGroupService
          .getStudyGroups()
          .then((data) => {
            let data2 = [...data]
            setStudyGroups(data2);
          })
          .catch((err) => {
            console.log(err);
          });
      };    
      // getData();
      React.useEffect(getData, []);
    // console.log("props of single study group: ", code);

    let arr2=[];

     const displaysg = () =>{

    arr2= studyGroups.map((studygroup) => (
      studygroup.sg_code
    ))

    if(arr2.includes(code)== true){
      return <h1>Group exists with code: {code}</h1>;
    }

      return (<h1>No group exists</h1>);

     }

     
     
     displaysg();

     
     const displaysg2 = () =>{

     return(<h1>helo from displaysg2</h1>)

       }
  
    
    return (  

        <>
           <h2>Name: Code  </h2>
           
         {displaysg()}
         <button onClick={()=>{displaysg2()}}>Go to the Group</button>
         <SingleStudyGroup props={code}/>
        </>
    );
}
 
export default StudyGroupStatus;