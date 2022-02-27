const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res ,next) => {
    try{
        const Token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(Token, process.env.ACESS_TOKEN);
        console.log(verify);
        next();
    }
    catch(error){
            res.status(404).json({
                error: "You need to login first"
            })
    }
        
    
}
