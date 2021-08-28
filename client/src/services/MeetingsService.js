import GenericService from "./GenericService";
class MeetingsService extends GenericService {
  constructor() {
    super();
  }

  addMeeting = (data) => this.post("meetings", data);
  deleteOneMeeting = (_id) => this.delete("meetings" + _id);
  
  // updateFlight = (_id, data) => this.put("flights/" + _id, data);
  getMeetings = () => this.get("meetings");
  getOneMeeting = (code) => this.get("meetings/" + code);
}

let meetingService = new MeetingsService();
export default meetingService;
