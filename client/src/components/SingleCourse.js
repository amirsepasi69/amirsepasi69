import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import courseService from "../services/CoursesService";
import { withRouter } from "react-router";
// import userService from "../../services/UserService";
// import Login from "../auth/Login";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import "./modal.css";
import { Link } from "react-router-dom";
import StudyGroupStatus from "./StudyGroupStatus";
// import Book from "../Book";


const useStyles = makeStyles((theme) => ({
  modalStyle1:{
    position:'absolute',
    top:'10%',
    left:'10%',
    overflow:'scroll',
    height:'100%',
    display:'block'
  },
  root: {
    width: 300,
  },
  media: {
    height: 200,
    width: 330,
    // margin:-10
  },
  btn2: {
    color: "green",
    textDecoration:"none"
  },
  action: {
    // display:"flex",
    justifyContent: "space-between",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // top:'30%',
    // left:'10%',
    overflow:'scroll',
    // height:'100%',
    // display:'block'
  },
  paper: {
    width: "90%",
    height: "80%",
    // backgroundColor: "#39445a",
    backgroundColor: "#ffffff",
    border: "1px solid #282c34",
    color: "black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
  bookbtn:{
    // textDecoration:"none",
    // color: "green",
    // backgroundColor:'green'
  }
}));

const SingleCourse = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//   const { flight, onDelete, history } = props;
  console.log("props of single course");
  console.log(props);
  return (
    <>
      <Card className={classes.root} style={{}}>
        <CardActionArea
          onClick={(event) => {
            handleOpen();
          }}
        >
          {/* <CardMedia
            className={classes.media}
            image={flight.image_url}
            title=""
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >
             <b> {props.course.name}</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             <b>Course Id. {props.course.code}</b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button size="small" color="primary" onClick={handleOpen} style={{backgroundColor:'#0288d1', color:'white'}}>
            Details
          </Button>
          {/* <Button size="small" color="" className={classes.btn2} variant='contained'   style={{backgroundColor:'green', color:'white'}} onClick={(e) => {
                // console.log("navigate to update");
                // console.log(props);
              //  props.history.push("/student");
              }}>
                Yo
                </Button>
                 */}
                {/* <Link to="/singlestudyGroup" className={classes.bookbtn}> 
                  Book
             </Link> 
          */}
        </CardActions>
  
      
        
      </Card>

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

              {/* <div className="fill">
                <img
                 

                  src={flight.logo}
                  
                  alt="airline logo"
                  className="ContentModal__portrait"
                />
              </div> */}

            

              <div className="ContentModal__about" style={{marginTop:"20px"}}>
                <span style={{marginTop:'25px'}} className="ContentModal__title">
                  {props.course.name} - {props.course.code}
                 
                  
                </span>

                <i className="tagline" style={{marginTop:'10px', fontSize:'1.3rem'}}>This course is great!</i>

                <span className="ContentModal__description">
                  {/* <div className="time" style={{textAlign:''}}>

                    <div style={{color:'#3f51b5', padding:'20px', marginLeft:'-45px'}}>Scheduled Departure: <span style={{marginLeft:'15px',color: 'white', backgroundColor:'red', border: '3px black solid', padding: '3px'}}><i>{flight.departure_time}</i></span>   </div>
                
                    <span style={{color:'#3f51b5', padding:'20px', marginLeft:'-45px'}}>Scheduled Arrival: <span style={{marginLeft:'15px',color: 'white', backgroundColor:'red', border: '3px black solid', padding: '3px'}}><i>{flight.arrival_time}</i></span></span>
                    <div style={{padding:'20px', color:'#3f51b5', marginLeft:'-45px'}}>
                    Departure From:<span style={{marginLeft:'15px',color: 'white', backgroundColor:'red', border: '3px black solid', padding: '3px'}}><i>{flight.from}</i></span>
                </div>
                <div style={{ marginLeft:'-25px',color:'#3f51b5'}}>
                 Destination:<span style={{marginLeft:'15px',color: 'white', backgroundColor:'red', border: '3px black solid', padding: '3px'}}><i>{flight.arrival}</i></span>
                  </div>
                  </div> */}
                 <StudyGroupStatus props={props} code={props.course.code}/>
                  
                </span>

{/*               
                <Button
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "#66bb6a",
                    marginBottom: "2rem",
                  }}
                  variant="contained"
                  onClick={(e) => {
                    console.log("navigate to update");
                    console.log(props);
                   history.push("/book/" + flight._id);}}
                  
                >
                  Book Now
                </Button> */}
           
              </div>
            </div>
          </div>
        </Fade>
      </Modal> 
    </>
  );
};

export default SingleCourse;
// export default withRouter(SingleProduct);