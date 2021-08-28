import React, { useState } from "react";
import studyGroupService from "../services/StudyGroupsService";
// import SingleCourse from "../components/SingleCourse";
// import { Grid, Button } from "@material-ui/core";
import SingleStudyGroup from "./SingleStudyGroup";
import { Link } from "react-router-dom";
import { DataState } from "../context/Context";



const StudyGroupStatus = ({ code }) => {
  // console.log("Props of Study Group Status:   ", props);
  const { state, dispatch } = DataState();
  const [studyGroups, setStudyGroups] = useState([]);
  const [arr, setArr] = useState([]);

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
  // getData();
  React.useEffect(getData, []);
  // console.log("props of single study group: ", code);

  let arr2 = [];

  const displaysg = () => {
    arr2 = studyGroups.map((studygroup) => studygroup.sg_code);

    if (arr2.includes(code) == true) {
      return <h2 style={{textAlign:"center"}}>Study Group exists with course: {code} 🎉</h2>;
    }

    return <h2 style={{textAlign:"center"}}>No Study Group exists with this course 😐</h2>;
  };

  displaysg();

  const displaysg2 = () => {
    return <h1>helo from displaysg2</h1>;
  };

  return (
    <>
      {/* <h2>Name: Code </h2> */}

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

      {/* <SingleStudyGroup props={code} /> */}
    </>
  );
};

export default StudyGroupStatus;
