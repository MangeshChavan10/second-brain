import jwt from "jsonwebtoken"
import { User } from "../db"

async function protect(req,res,next) {
    try {
        let token;

        if(req.headers.authorization || req.headers.authorization.startsWith("Bearer ")){
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
        return res.status(401).json({
            success: false,
            message: "Not authorized, no token provided",
        });
        }


        const userId = jwt.verify(token,process.env.JWT_SECRET);
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token",
            });
        }
        req.user = await User.findById({id:userId})
        
    } catch (error) {
        
    }
    
}