import React, { useState } from "react";
import studyGroupService from "../services/StudyGroupsService";
import SingleStudyGroup from "./SingleStudyGroup";
import { Link } from "react-router-dom";
import { DataState } from "../context/Context";



const StudyGroupStatus = ({ code }) => {
  const { dispatch } = DataState();
  const [studyGroups, setStudyGroups] = useState([]);

  const getData = () => {
    studyGroupService
      .getStudyGroups()
      .then((data) => {
        let data2 = [...data];
        setStudyGroups(data2);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);


  let arr2 = [];

  const displaysg = () => {
    arr2 = studyGroups.map((studygroup) => studygroup.sg_code);

    if (arr2.includes(code) == true) {
      return <h2 style={{textAlign:"center"}}>Study Group exists with course: {code} 🎉</h2>;
    }

    return <h2 style={{textAlign:"center"}}>No Study Group exists with this course 😐</h2>;
  };

  displaysg();

  return (
    <>

      {displaysg()}
      <Link to="/singlestudygroup">
        {arr2.includes(code) && 
         <button
         style={{padding: "10px", marginLeft:"18rem", backgroundColor:"lawngreen", color:""}}
           onClick={() =>
             dispatch({
               type: "ADD_TO_CODE",
               payload: code,
             })
           }
         >
           Go to the Group
         </button>
        }
       
      </Link>
    </>
  );
};

export default StudyGroupStatus;
