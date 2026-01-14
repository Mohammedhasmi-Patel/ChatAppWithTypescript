import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const errorHandler: ErrorRequestHandler = (error, req, res, next): any => {
    console.log(`Error Occured ${req.path} : ${error}`);

    return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
        message : "internal server error",
        error : error?.message || "Something went wrong"
    });
}