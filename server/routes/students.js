var express = require('express');
var router = express.Router();
var daoMain = require("../dao/daoMain");


/* GET home page. */
router.get('/', function(req, res, next) {
    daoMain.getStudents()
    .then((studentsList) => res.json(studentsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
});

router.get('/:id', function(req, res, next) {
    daoMain.getOneStudent(req.params.id)
    .then((studentsList) => res.json(studentsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
});

router.post('/', function (req,res, next){
    // let data = JSON.stringify(req.body);
    let name = req.body.name;
    let roll_no = req.body.roll_no;
    let degree = req.body.degree;
    let section = req.body.section;
    let current_semester = req.body.current_semester;
    
    // console.log("data:", req.body);
    daoMain
    .addStudent(name, roll_no, degree, section, current_semester)
    .then(() => {
      res.end(); 
      res.send("Student Created!");
        console.log("Student Created");})
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

router.delete('/', function (req,res, next){

    daoMain
    .deleteAllStudents()
    .then(() => {
      res.send("All Students Deleted");
        res.end(); 
        console.log("Students Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

  router.delete('/:id', function (req,res, next){
    daoMain
    .deleteOneStudent(req.params.id)
    .then(() => {
      res.send("One Student Deleted");
        res.end(); 
        console.log("One Student Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });




module.exports = router;
