import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transpoter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS
  }
});

export function sendMailToUser(user) {
  const email = {
    from: "Bookstore",
    to: user.email,
    subject: "Bookstore - confirmation account.",
    text: `
      ${user.username} welcome to bookstore. Please, confirm your email.
      ${user.generateUrl}
    `
  }
  transpoter.sendMail(email);
}
