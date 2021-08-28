import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./modal.css";
import StudyGroupStatus from "./StudyGroupStatus";

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

const SingleCourse = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root} style={{}}>
        <CardActionArea
          onClick={(event) => {
            handleOpen();
          }}
        >
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

              <div className="ContentModal__about" style={{marginTop:"15px"}}>
                <span style={{marginTop:'0px'}} className="ContentModal__title">
                  {props.course.name} - {props.course.code}
                 
                  
                </span>

                <i className="tagline" style={{marginTop:'10px', fontSize:'1.3rem'}}>This course is great!</i>

                <span className="ContentModal__description">
                 <StudyGroupStatus props={props} code={props.course.code}/>
                  
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </Modal> 
    </>
  );
};

export default SingleCourse;