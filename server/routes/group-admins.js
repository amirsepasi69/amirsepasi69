var express = require('express');
var router = express.Router();
var daoMain = require("../dao/daoMain");


/* GET home page. */
router.get('/', function(req, res, next) {
    daoMain.getGroupAdmins()
    .then((groupAdminsList) => res.json(groupAdminsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
    // res.send("yo")
});

router.get('/:id', function(req, res, next) {
    daoMain.getGroupAdmin(req.params.id)
    .then((groupAdminsList) => res.json(groupAdminsList))
    .catch((err) =>{ res.status(500).end(); console.log(err)});
});

router.post('/', function (req,res, next){
    // let data = JSON.stringify(req.body);
    let name = req.body.name;
    let group_admin_id =  req.body.group_admin_id;
    daoMain
    .addGroupAdmin(name, group_admin_id)
    .then(() => {
      res.end(); 
      res.send("Group Admin Created!");
        console.log("Group Admin Created");})
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

router.delete('/', function (req,res, next){

    daoMain
    .deleteAllGroupAdmins()
    .then(() => {
      res.send("All Group Admins Deleted");
        res.end(); 
        console.log("All Group Admins Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });

  router.delete('/:id', function (req,res, next){
    daoMain
    .deleteOneGroupAdmin(req.params.id)
    .then(() => {
      res.send("One Group Admin Deleted");
        res.end(); 
        console.log("One Group Admin Deleted");
    })
    .catch((err) => {res.status(500).end(); console.log(err)});
  });




module.exports = router;
