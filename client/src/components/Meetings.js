import meetingService from "../services/MeetingsService";
import React, { useState } from "react";

const Meetings = ({props}) => {

    const [meetings, setMeetings] = useState([]);

    const getData = () => {
        meetingService
          .getMeetings()
          .then((data) => {
            let data2 = [...data]
            setMeetings(data2);
            // console.log("data2: ", data2);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };    
      // getData();
      React.useEffect(getData, []);
      console.log("Meetings: ", meetings);

    return (  
        <>
        <div style={{textAlign:"center"}}>
        <h1>Meetings of Study Group : {props} </h1>
        </div>
       
        </>
    );
}
 
export default Meetings;