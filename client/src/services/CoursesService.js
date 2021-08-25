import GenericService from "./GenericService";
class CoursesService extends GenericService {
  constructor() {
    super();
  }
  addCourse = (data) => this.post("courses", data);
  deleteOneCourse = (_id) => this.delete("courses" + _id);
  // updateFlight = (_id, data) => this.put("flights/" + _id, data);
  getCourses = () => this.get("courses");
  getCourse = (id) => this.get("courses" + id);
}

let courseService = new CoursesService();
export default courseService;
