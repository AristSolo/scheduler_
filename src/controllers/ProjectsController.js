//Import the Projects model
const Projects = require("../../models").Projects
//import sequelize
const Sequelize = require("sequelize")
//import validator
const validator = require("../validation/projectValidator")
const Op = Sequelize.Op
//
module.exports = {
    //
    // TODO: Add a status column in the projects table 
    createProject(projectInfo,result){
        //Validate post data
        const {error, isValid} = validator.create(projectInfo)
        if(isValid){
            //Proceed to project creation
            Projects.findOne({
                [Op.or]:[{name: projectInfo.name}]
            }).then(found=>{
                if(found.length > 0){
                    result({error: "Project name already exists"},null)
                }else{
                    Projects.create({
                        name: projectInfo.name,
                        description: projectInfo.description,
                        purpose: projectInfo.purpose
                    }).then(created=>{
                        result(null,{message: "Project Created Successfully"})
                    }).catch(err=>{
                        result({error: err},null)
                    })
                }
            }).catch(err=>{
                result({error: err},null)
            })
        }else{
            //Return validation error
            result({error: error},null)
        }
    },
    getProjects(result){
        Projects.findAll({
            attributes: ['id','name','description', 'purpose']
        }).then(projects=>{
            result(null, projects)
        }).catch(err=>{
            result({error: err},null)
        })
    },
    updateProject(updateInfo,result){
        const {error, isValid}= validator.update(updateInfo)
        if(isValid){
            Projects.findByPk(updateInfo.projectId).then(foundProject=>{
                if(foundProject!==null){
                    foundProject.update({
                        name: updateInfo.name,
                        description: updateInfo.description,
                        purpose: updateInfo.purpose
                    }).then(updateSuccess=>{
                        result(null,{message: "Project Update Successfull"})
                    }).catch(error=>result({error: error},null))
                }else{
                    result({error:"Invalid project"},null)
                }
            }).catch(err=>result({error: err},null))
        }else{
            result({error:error},null)
        }

    }
}

