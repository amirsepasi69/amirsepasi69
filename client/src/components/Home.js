
import { Link } from "react-router-dom";
const Home = () => {


    return (  
        <>
        <div style={{textAlign:"center"}}> 
        <h1>Welcome to Home Page</h1>
        <Link to="/student">
          <button style={{marginLeft:"50px", padding: "15px"}}>
          Go As a Student
          </button>
          
          </Link>
        <Link to="/groupadmin">
        <button style={{marginLeft:"30px", padding: "15px"}}>
          Go As a Group Admin
          </button>
          </Link>
        <Link to="/generaladmin">
        <button style={{marginLeft:"30px", padding: "15px"}}>
          Go As a General Admin
          </button>
          </Link>
</div>

       
        </>
    );
}
 
export default Home;