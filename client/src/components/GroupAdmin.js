import React, { useState } from "react";
import courseService from "../services/CoursesService";
import SingleCourse from "../components/SingleCourse";
import { Grid, Button } from "@material-ui/core";

const GroupAdmin = (props) => {
    const [courses, setCourses] = useState([]);

    const getData = () => {
        courseService
          .getCourses()
          .then((data) => {
            let data2 = [...data]
            setCourses(data2);
            // console.log("data2: ", data2);
            
          })
          .catch((err) => {
            console.log(err);
          });
      };    
      // getData();
      React.useEffect(getData, []);
      // console.log("courses: ", courses);

     


    return ( 
   <>
        <h1 style={{textAlign:"center"}}>Group Admin Page</h1>
      
        <h2 style={{textAlign:"center"}}>All Courses </h2>
        {/* {courses.map((course, index) => (
          <SingleStudyGroup course={course} />
        
        // <h3>{course.id}: {course.name}  {course.credits} {index}</h3>
        ))} */}
        {/* <button onClick={(e)=>{props.history.push("/singlecourse")}} > click</button> */}

        <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
      
      
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={3} spacing={5} className="abc">
              <span className="abc">
            <SingleCourse  course={course} />
            </span>
                
            </Grid>
          ))}
      
      <Button onClick={(e)=>{
        props.history.push("/editstudygroup")
      }}>Go</Button>
      </Grid>

   
     </> 

     );
}
 
export default GroupAdmin;