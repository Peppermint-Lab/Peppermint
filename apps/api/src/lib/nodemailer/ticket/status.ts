import nodeMailer from "nodemailer";
import { prisma } from "../../../prisma";

export async function sendTicketStatus(ticket: any) {
  let mail;
  let replyto;

  const emails = await prisma.email.findMany();

  if (emails.length > 0) {
    if (process.env.ENVIRONMENT === "development") {
      let testAccount = await nodeMailer.createTestAccount();
      mail = nodeMailer.createTransport({
        port: 1025,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    } else {
      const email = emails[0];
      replyto = email.reply;
      mail = nodeMailer.createTransport({
        //@ts-ignore
        host: email.host,
        port: email.port,
        secure: email.secure, // true for 465, false for other ports
        auth: {
          user: email.user, // generated ethereal user
          pass: email.pass, // generated ethereal password
        },
      });
    }

    await mail
      .sendMail({
        from: replyto, // sender address
        to: ticket.email,
        subject: `Ticket ${ticket.id} status is now ${
          ticket.isComplete ? "COMPLETED" : "OUTSTANDING"
        }`, // Subject line
        text: `Hello there, Ticket ${ticket.id}, now has a status of ${
          ticket.isComplete ? "COMPLETED" : "OUTSTANDING"
        }`, // plain text body
        html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        
          <head>
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
          </head>
          <div id="" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Ticket Created<div></div>
          </div>
        
          <body style="background-color:#ffffff;margin:0 auto;font-family:-apple-system, BlinkMacSystemFont, &#x27;Segoe UI&#x27;, &#x27;Roboto&#x27;, &#x27;Oxygen&#x27;, &#x27;Ubuntu&#x27;, &#x27;Cantarell&#x27;, &#x27;Fira Sans&#x27;, &#x27;Droid Sans&#x27;, &#x27;Helvetica Neue&#x27;, sans-serif">
            <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:600px;margin:0 auto">
              <tr style="width:100%">
                <td>
                  <table style="margin-top:8px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td><img alt="Slack" src="https://raw.githubusercontent.com/Peppermint-Lab/peppermint/next/static/black-side-logo.svg" width="200" height="60" style="display:block;outline:none;border:none;text-decoration:none" /></td>
                      </tr>
                    </tbody>
                  </table>
                  <h1 style="color:#1d1c1d;font-size:16px;font-weight:700;margin:10px 0;padding:0;line-height:42px">Ticket: ${
                    ticket.title
                  }</h1>
                  <p style="font-size:20px;line-height:28px;margin:4px 0">
                  <p>Your Ticket, now has a status of ${
                    ticket.isComplete ? "completed" : "open"
                  }</p>
                  Kind regards, 
                  <br>
                  Peppermint ticket management
                  </p>
                  
                  <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td>
                        <a target="_blank" style="color:#b7b7b7;text-decoration:underline" href="https://docs.peppermint.sh" rel="noopener noreferrer">Documentation</a>   |   <a target="_blank" style="color:#b7b7b7;text-decoration:underline" href="https://discord.gg/8XFkbgKmgv" rel="noopener noreferrer">Discord</a> </a>
                        <p style="font-size:12px;line-height:15px;margin:16px 0;color:#b7b7b7;text-align:left">This was an automated message sent by peppermint.sh -> An open source helpdesk solution</p>
                          <p style="font-size:12px;line-height:15px;margin:16px 0;color:#b7b7b7;text-align:left;margin-bottom:50px">©2022 Peppermint Ticket Management, a Peppermint Labs product.<br />All rights reserved.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        
        </html>
        `,
      })
      .then((info) => {
        console.log("Message sent: %s", info.messageId);
      })
      .catch((err) => console.log(err));
  }
}
