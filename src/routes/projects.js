//import express
const express = require("express")
const router = express.Router()
//import controller
const ProjectsController = require("../controllers/ProjectsController")

router.post("/create", (req,res)=>{
    ProjectsController.createProject(req.body, (error,created)=>{
        if(error){
            res.status(400).json(error)
        }else{
            res.status(200).json(created)
        }
    })
})
router.get("/all", (req,res)=>{
    ProjectsController.getProjects((error,projects)=>{
        if(error){
            res.status(400).json(error)
        }else{
            res.status(200).json(projects)
        }
    })
})
module.exports = router