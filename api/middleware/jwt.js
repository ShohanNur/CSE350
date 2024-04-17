import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    // console.log("This is token " , token);
    if (!token) {
       return next(createError(401, "You are not authenticated!"));
    }
    
    jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
        if(err){
            return next(createError(403, "Token is not valid!"));
        }
        // console.log(payload)
        
        // Set req.userId and req.isSeller based on payload
        req.userId = payload.id;
        req.isSeller = payload.isSeller; // Convert to boolean
        
        next(); // pass the execution off to whatever request the client intended
    });
}
