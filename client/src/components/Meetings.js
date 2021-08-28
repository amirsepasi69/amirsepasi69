import meetingService from "../services/MeetingsService";
import React, { useState } from "react";

const Meetings = () => {

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
        <h1>Meetings</h1>
        </>
    );
}
 
export default Meetings;