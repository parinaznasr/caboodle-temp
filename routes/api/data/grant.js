const Grant = require('../../../database/models/grant');

const addOne = async (req, res) => {
    const grantObj = req.body.grantObj;
    try{

        // insert pipeline
        let newGrant = new Grant(grantObj);
        await newGrant.save();

    }catch(error){
        console.log(error);
        res.status(500);
    }finally{
        res.send({});
    }
}

module.exports = {
    addOne
}
