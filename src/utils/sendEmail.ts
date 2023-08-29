import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "742ebe26c103f7",
    pass: "c211ed871b1b6a"
  }
});

type FeedBack = {
  type: string,
  comment: string,
  screenshot: string,
}

export function sendMail(FeedBack: FeedBack){

  const emailSent = transport.sendMail({
    from: "client@gmail.com",
    to: "maurotwister475@gmail.com",
    subject: "Novo FeedBack",
    html:  [
      `<p><b>Tipo de feedback: </b>${FeedBack.type}</p>
       <p><b>Comentário:</b> ${FeedBack.comment}</p>
       <p><b>Fotografia</b></p> 
       <img src=${FeedBack.screenshot} alt=${FeedBack.type} />
       `
    ].toString(),
  });

  return emailSent;
}