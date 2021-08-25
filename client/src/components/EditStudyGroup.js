import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import courseService from "../services/CoursesService";
// import Auth from "../auth/Auth";

const EditStudyGroup = (props) => {
  const [name, setName] = React.useState("");

 
  return (
    <>
    <h1>Edit Study Group</h1>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{fontSize:"3rem", textAlign:'center', marginTop:'25px', fontStyle:"bold"}}>Add New Study Group</div> 
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} style={{border: '4px solid #6e78b5', padding:'50px', backgroundColor:'#c8cdf1' }}>
          <TextField
          
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
         
        
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9} >
          <Button
          style={{marginLeft:'270px', backgroundColor:'#6e78b5', fontStyle:'bold', color: 'white', marginBottom:'30px', marginTop:'10px'}}
            variant="contained"
            
            onClick={(e) => {
              courseService
                .addFlight({ name })
                .then((data) => {
                //   console.log("Consoling New FLight data")
                //   console.log(data);
                  props.history.push("/");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    
    </>
  );
};

export default EditStudyGroup;
