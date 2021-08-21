var express = require('express');
var router = express.Router();
var daoMain = require("../dao/daoMain");


/* GET home page. */
router.get('/', function(req, res, next) {
    daoMain.getCourses()
    .then((coursesList) => res.json(coursesList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
    
});

router.get('/:id', function(req, res, next) {
    daoMain.getOneCourse(req.params.id)
    .then((coursesList) => res.json(coursesList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
});



router.post('/', function (req,res, next){
    // let data = JSON.stringify(req.body);
    let code = req.body.code;
    let name = req.body.name;
    let credits = req.body.credits;
    console.log("data:", req.body);
    daoMain
    .addCourse(code, name, credits)
    .then(() => {
      res.send("Course Created");
        res.end(); 
        console.log("Course Created");
      })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

router.delete('/', function (req,res, next){

    daoMain
    .deleteAllCourses()
    .then(() => {
      res.send("Course Deleted");
        res.end(); 
        console.log("Courses Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

  router.delete('/:id', function (req,res, next){
    daoMain
    .deleteOneCourse(req.params.id)
    .then(() => {
      res.status(200).send("One course has been deleted!")
        res.end(); 
        console.log("One Course Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });


module.exports = router;
