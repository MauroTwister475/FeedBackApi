import { Request, Response, NextFunction, Router } from "express";
import { CreateFeedBackController } from "../controllers/createFeedback";

export const routes = Router();

function myMiddleware(req: Request ,res: Response, next: NextFunction){

  const { type, comment, screenshot } = req.body;

  if(!type || ! comment || !screenshot){
    return res.json({
      message: "Dados incompletos",
    })
  }

  next();
}

const newFeedBack = new CreateFeedBackController();
routes.post("/createFeedBack", myMiddleware, newFeedBack.create);