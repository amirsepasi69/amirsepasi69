var express = require('express');
var router = express.Router();
var daoMain = require("../dao/daoMain");


/* GET home page. */
router.get('/', function(req, res, next) {
    daoMain.getGeneralAdmins()
    .then((generalAdminsList) => res.json(generalAdminsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
});

router.get('/:id', function(req, res, next) {
    daoMain.getGeneralAdmin(req.params.id)
    .then((generalAdminsList) => res.json(generalAdminsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
});

router.post('/', function (req,res, next){
    // let data = JSON.stringify(req.body);
    let name = req.body.name;
    let general_admin_id =  req.body.general_admin_id;
    daoMain
    .addGeneralAdmin(name, general_admin_id)
    .then(() => {
      res.send("General Admin Created");
      res.end(); 

        console.log("General Admin Created");})
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

  router.delete('/', function (req,res, next){

    daoMain
    .deleteAllGeneralAdmins()
    .then(() => {
      res.send("All General Admins Deleted");
        res.end(); 
        console.log("All General Admins Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

  router.delete('/:id', function (req,res, next){
    daoMain
    .deleteOneGeneralAdmin(req.params.id)
    .then(() => {
      res.send("One General Admin Deleted");
        res.end(); 
        console.log("One General Admin Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });




module.exports = router;
