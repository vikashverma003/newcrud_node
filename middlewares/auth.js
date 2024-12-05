const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SCRET_KEY = "NODEJSAPI";

const auth = (req, res, next)=> {
    try {
        console.log("from middle");
        let token = req.headers.authorization;
        console.log(token);
        if(token) {
            token = token.split(" ")[1];
            console.log("fffff");
            console.log(token);

            let user = jwt.verify(token, SCRET_KEY);
            console.log("userr");
            console.log(user.id);
            req.userId = user.id;
        }
        else{
            res.status(401).json({message: "Unauthorized user"});
        }
        next();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Unauthorized user"});        
    }
}

module.exports = auth;