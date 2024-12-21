import handlebars from "handlebars";
import { prisma } from "../../../prisma";
import { createTransportProvider } from "../transport";

export async function sendComment(
  comment: string,
  title: string,
  id: string,
  email: string
) {
  try {
    const provider = await prisma.email.findFirst();

    const transport = await createTransportProvider();

    const testhtml = await prisma.emailTemplate.findFirst({
      where: {
        type: "ticket_comment",
      },
    });

    var template = handlebars.compile(testhtml?.html);
    var replacements = {
      title: title,
      comment: comment,
    };
    var htmlToSend = template(replacements);

    console.log("Sending email to: ", email);
    await transport
      .sendMail({
        from: provider?.reply,
        to: email,
        subject: `New comment on Issue #${title} ref: #${id}`,
        text: `Hello there, Issue #${title}, has had an update with a comment of ${comment}, Check it out in Peppermint`,
        html: htmlToSend,
      })
      .then((info: any) => {
        console.log("Message sent: %s", info.messageId);
      })
      .catch((err: any) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}
