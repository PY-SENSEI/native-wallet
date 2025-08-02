import { Ratelimit } from "@upstash/ratelimit";
import ratelimiter from "../config/upstash.js";

const rateLimiter = async(req,res, next) => {
  
    try {
        const {success} = await Ratelimit.limit("my-rate-limit")

        if(!success){
            return res.status(429).json({
                messages:"Too many requests, please try again later"
            });
        }

        next();
    } catch (error) {
        
    }
}

export default rateLimiter;