import React, { useState } from "react";
import { DataState } from "../context/Context";

import Meetings from "./Meetings";

const SingleStudyGroup = (props) => {
  
const { state:{code}, dispatch } = DataState();

    let fcode = code;
    return (
        <>
        <Meetings props={fcode}/>
        </>
      );
}
 
export default SingleStudyGroup;


//How to survive page refresh
// var someVarName = "value";
// localStorage.setItem("someVarKey", someVarName);

// var someVarName = localStorage.getItem("someVarKey");