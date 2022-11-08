const Projects = require('../../../database/models/project');

const getProjects = async (req, res) => {
    let result = {
        projects: [],
    };
    console.log("Hello")
    try{
        // Get projects stored in the database
        let projects =  await Projects.find().lean();
        projects.forEach(item => result.projects.push({
            title: item.title,
            researchArea: item.researchArea,
            status: item.status,
        }))
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getProjects
}
