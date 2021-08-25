var express = require('express');
var router = express.Router();
var daoMain = require("../dao/daoMain");


/* GET home page. */
router.get('/', function(req, res, next) {
    daoMain.getStudyGroups()
    .then((studyGroupsList) => res.json(studyGroupsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
    // res.send("yo")
});

router.get('/:id', function(req, res, next) {
    daoMain.getOneStudyGroup(req.params.id)
    .then((studyGroupsList) => res.json(studyGroupsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
});

router.post('/', function (req,res, next){
    // let data = JSON.stringify(req.body);
    let data = req.body.name;
    let data2 = req.body.sg_code;
    console.log("data:", req.body.name, req.body.sg_code);
    daoMain
    .addStudyGroup(data, data2)
    .then(() => {res.end(); ;
        console.log("Study Group name Created");})
    .catch((err) => {res.status(500).end(); console.log(err)});
});



router.delete('/', function (req,res, next){
    daoMain
    .deleteStudyGroups()
    .then(() => {
        res.end(); 
        console.log("All Study Groups Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

router.delete('/:id', function (req,res, next){
    daoMain
    .deleteOneStudyGroup(req.params.id)
    .then(() => {
        res.end(); 
        console.log("One Study Group Deleted");
        // console.log("req.params.id: ", req.params.id);
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });



router.delete('/:id', function (req,res, next){
    daoMain
    .deleteOneStudyGroup(req.params.id)
    .then(() => {
        res.end(); 
        console.log("One Study Group Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });



router.delete('/:id', function (req,res, next){
    daoMain
    .deleteOneStudyGroup(req.params.id)
    .then(() => {
        res.end(); 
        console.log("One Study Group Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });





module.exports = router;
