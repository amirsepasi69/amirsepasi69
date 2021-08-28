var express = require('express');
var router = express.Router();
var daoMain = require("../dao/daoMain");


/* GET home page. */
router.get('/', function(req, res, next) {
    daoMain.getMeetings()
    .then((meetingsList) => res.json(meetingsList))
});

router.get('/:code', function(req, res, next) {
    daoMain.getOneMeeting(req.params.code)
    .then((meetingsList) => res.json(meetingsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
});



router.post('/', function (req,res, next){
    // let data = JSON.stringify(req.body);
    let meeting_id = req.body.meeting_id;
    let meeting_name = req.body.meeting_name;
    let date = req.body.date;
    let time = req.body.time;
    // console.log("data:", req.body);
    daoMain
    .addMeeting(meeting_id, meeting_name, date, time)
    .then(() => {
      res.send("Meeting created!");
      res.end(); ;
      console.log("Meeting Created");})
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

router.delete('/', function (req,res, next){

    daoMain
    .deleteAllMeetings()
    .then(() => {
      res.send("All Meetings Deleted!");
        res.end(); 
        console.log("All Meetings Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

  router.delete('/:id', function (req,res, next){
    daoMain
    .deleteOneMeeting(req.params.id)
    .then(() => {
      res.send("One Meeting Deleted!");
        res.end(); 
        console.log("One Meeting Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });


module.exports = router;
