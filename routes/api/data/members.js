const Members = require('../../../database/models/member');

const getMembers = async (req, res) => {
    let result = {
        members: [],
    };
    try{
        // Get members stored in the database 
        let members =  await Members.find().lean();
        members.forEach(item => result.members.push({
            name: item.name,
            position: item.position,
            status: item.status,
        }))
    }catch(error){
        console.log(error);
    }finally{
        res.send(result);
    }
}

module.exports = {
    getMembers
}
