import meetingService from "../services/MeetingsService";
import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./modal.css";
import { DataState } from "../context/Context";


const Meetings = ({ props }) => {
const { state:{meetingID, match}, dispatch } = DataState();
const [open, setOpen] = useState(false);
const [meetingId, setMeetingId] = useState([""]);
const [meetings, setMeetings] = useState([]);
const [request, setRequest] = useState(" Become the administrator of this group!");
  

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
    },
    media: {
      height: 200,
      width: 330,
    },
    btn2: {
      color: "green",
      textDecoration:"none"
    },
    action: {
      justifyContent: "space-between",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow:'scroll',
    },
    paper: {
      width: "90%",
      height: "80%",
      backgroundColor: "#ffffff",
      border: "1px solid #282c34",
      color: "black",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 1, 3),
    }
  }));

  
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //List Material UI

  const columns = [
    { field: "meeting_id", headerName: "ID", width: 220 },
    {
      field: "meeting_name",
      headerName: "Meeting Name",
      width: 220,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      width: 220,
      editable: true,
    },
    {
      field: "time",
      headerName: "Time",
      type: "number",
      width: 220,
      editable: true,
    },
  ];



  const getData = () => {
    meetingService
      .getOneMeeting(props)
      .then((data) => {
        let data2 = [...data];
        setMeetings(data2);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);

  console.log("Meetings: ", meetings);



let depArray=[];

if (meetingID!==undefined){
  depArray = meetingID.map((meeting) => meeting);
}

  
  console.log("meetingID: ", meetingID);
  console.log("deparray: ", depArray);
        var newArray = [];
        var newArray = depArray.filter(function(elem, pos) {
                return depArray.indexOf(elem) == pos;
        });

        console.log("newArray:", newArray );

  return (
    <>

    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="ContentModal">


            

              <div className="ContentModal__about" style={{marginTop:"15px"}}>
                <span style={{marginTop:'0px'}} className="ContentModal__title">
                  <h5>Enter the Meeting ID to Sign Up</h5>
                
                  
                </span>
                <label for=""><span>Meeting ID: </span>
      
         

              
               </label>

               <select 
              onChange={(e) => {
              setMeetingId(e.target.value);
}} >      
                    <option>...</option>
                    {
                    meetings.map((m)=><option value={m.meeting_id}>{m.meeting_id}</option>)
                    }
    
          </select>

               <button onClick={(e)=>{
                 dispatch({
                  type: "ADD_TO_MEETINGID",
                  payload: meetingId,
                });
               }}

style={{padding:"5px", width: "10%", marginLeft:"1rem"}}>Sign Up!</button>
             

                {/* <i className="tagline" style={{marginTop:'10px', fontSize:'1.3rem'}}>This course is great!</i> */}

                <span className="ContentModal__description">
                  
                </span>
           
              </div>
            </div>
          </div>
        </Fade>
      </Modal> 

      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: "3rem" }}>
          {" "}
          All Meetings of this Study Group : {props}{" "}
        </h1>
      </div>
      {meetings.length ? (
        <div
          style={{
            marginTop: "5rem",
            height: 300,
            width: "80%",
            paddingLeft: "8rem",
          }}
        >
          <DataGrid
            rows={meetings}
            columns={columns}
            pageSize={5}
            editMode={false}
            // checkboxSelection
            // disableSelectionOnClick
          />
        </div>
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "14rem", color: "red" }}>
          No meetings Right now!
        </h1>
      )}

      
        <button
          style={{
            marginLeft: "29rem",
            marginTop: "3rem",
            padding: "10px",
            backgroundColor: "skyblue",
            color: "white",
            fontWeight: "bold",
          }}
          onClick={(event) => {
            handleOpen();
          }}
        >
          
          Sign Up for a Meeting!
        </button>
      
      <button
        style={{
          marginLeft: "1rem",
          padding: "10px",
          backgroundColor: "skyblue",
          color: "white",
          fontWeight: "bold",
        }}

        onClick={(e)=>{
          setRequest("Request Sent!")
        }
          
        }
      >
       {request}
      </button>
{meetings.length && 
<>
  <div><h2 style={{textAlign:"center"}}>Meetings You have Signed Up for are given below:- </h2></div>
                         <div style={{marginTop:"1rem",  marginBottom:"3rem"}}>
                           <h2 style={{textAlign:'center'}}>Meeting Ids</h2>

                        { 
                          
                            newArray.map((m) => <ul style={{textAlign:"center",  fontSize:"1.3rem", fontWeight:"bold"}}> {m}</ul>)
                          
                          

                        } 
                        {
                          
                        }
                         </div>
                       
                         </>
}
      
    </>
  );
};

export default Meetings;
