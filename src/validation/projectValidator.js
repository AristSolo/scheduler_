const isEmpty = require("is-empty")
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
    }
}