import GenericService from "./GenericService";
class StudyGroupsService extends GenericService {
  constructor() {
    super();
  }

  addStudyGroup = (data) => this.post("studygroups", data);
  deleteOneStudyGroup = (_id) => this.delete("studygroups" + _id);
//   deleteStudyGroups = () => this.delete("studygroups");
  // updateFlight = (_id, data) => this.put("flights/" + _id, data);
  getStudyGroups = () => this.get("studygroups");
  getOneStudyGroup = (id) => this.get("studygroups" + id);
}

let studyGroupService = new StudyGroupsService();
export default studyGroupService;
