import React, { useState } from "react";
import { DataState } from "../context/Context";

import Meetings from "./Meetings";

const SingleStudyGroup = (props) => {
  
const { state:{code}, dispatch } = DataState();

    let fcode = code;

    

    // console.log("Props of Single STudy Group: ", props);
    return (
        <>
        <h1> {fcode} </h1>
        <Meetings />
        </>
      );
}
 
export default SingleStudyGroup;


//How to survive page refresh
// var someVarName = "value";
// localStorage.setItem("someVarKey", someVarName);

// var someVarName = localStorage.getItem("someVarKey");