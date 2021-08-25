import GenericService from "./GenericService";
class GroupAdminsService extends GenericService {
  constructor() {
    super();
  }

  addGroupAdmin = (data) => this.post("groupadmins", data);
  deleteOneGroupAdmin = (_id) => this.delete("groupadmins" + _id);
  // updateFlight = (_id, data) => this.put("flights/" + _id, data);
  getGroupAdmins = () => this.get("groupadmins");
  getOneGroupAdmin = (id) => this.get("groupadmins" + id);
}

let groupAdminService = new GroupAdminsService();
export default groupAdminService;
