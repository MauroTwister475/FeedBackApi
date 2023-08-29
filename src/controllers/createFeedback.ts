import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { sendMail } from "../utils/sendEmail";

export class CreateFeedBackController {

  async create(req: Request, res: Response){

    const { type, comment, screenshot } = req.body;

    try {
      const feedBack = await prisma.feedBack.create({
        data: {
          type, 
          comment, 
          screenshot,
        }
      });
      // antes de enviar 
      await sendMail({
        type, 
        comment, 
        screenshot,
      });

      return res.status(201).json(feedBack); // tenho acesso ao feedback

    }catch(error){
      console.log("Erro grave "+error);
    }
  }
}