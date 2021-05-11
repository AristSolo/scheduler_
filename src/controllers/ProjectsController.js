//Import the Projects model
const Projects = require("../../models").Projects
//import sequelize
const Sequelize = require("sequelize")
//import validator
const validator = require("../validation/projectValidator")
const Op = Sequelize.Op
//
module.exports = {
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
            attributes: ['name','description', 'purpose']
        }).then(projects=>{
            result(null, projects)
        }).catch(err=>{
            result({error: err},null)
        })
    },
    updateProject(updateInfo,result){

    }
}

