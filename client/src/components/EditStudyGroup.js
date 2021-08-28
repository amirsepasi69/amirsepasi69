import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import courseService from "../services/CoursesService";
import studyGroupService from "../services/StudyGroupsService";

const EditStudyGroup = (props) => {
  console.log("editStudyGroups Props", props);
  const [name, setName] = React.useState("");
  const [sg_code, setSg_code] = React.useState("");

 
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
           <TextField
          
          label="sg_code"
          fullWidth
          value={sg_code}
          onChange={(e) => {
            setSg_code(e.target.value);
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
              studyGroupService
                .addStudyGroup({ name, sg_code })
                .then((data) => {
                  console.log("Consoling New Study Group data")
                  console.log(data);
                  // props.history.push("/");
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
