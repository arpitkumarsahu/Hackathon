require('dotenv').config();
const jwt = require("jsonwebtoken");
// const secretKey = process.env.secretKey;

const VarifyToken = async (req, res,next) =>{
  try {
    let token = req.headers.authtoken || null;
    if(!token){
        return res.status(401).send({msg : "Please Login First"})
    }

    jwt.verify(token, "masai", (err, decode) =>{
        if(err){
            res
            .status(500)
            .send({ msg: "Invalid Token Please Login again", err });
        }else{
            let authId = decode._id
            req.authId = authId;
            next();
        }
    })
  } catch (error) {
    res
    .status(500)
    .send({ msg: "Somthing Wrong with token", error });
  }
}

module.exports = {VarifyToken}