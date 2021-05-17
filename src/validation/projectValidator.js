const isEmpty = require("is-empty")
const { updateProject } = require("../controllers/ProjectsController")
module.exports = {
    create(projectData){
        let error = {}
        if(isEmpty(projectData.name)){
            error.name = "Provide the Project name"
        }
        if(isEmpty(projectData.description)){
            error.description = "Provide the Project info"
        }
        if(isEmpty(projectData.purpose)){
            error.purpose = "Provide the Project goal"
        }
        return{error, isValid:isEmpty(error)}
    },
    update(updateInfo){
        let error = {}
        if(isEmpty(updateInfo.name)){
            error.name = "Provide the project name"
        }
        if(isEmpty(updateInfo.description)){
            error.description = "Provide the project description"
        }
        if(isEmpty(updateInfo.purpose)){
            error.purpose = "Provide the project goal"
        }
        if(isEmpty(updateInfo.projectId)){
            error.projectId = "Provide specific project"
        }
        return({error, isValid: isEmpty(error)})
    }
}