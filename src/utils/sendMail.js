require("dotenv").config();
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function sendEmail(fullName, companyName, email, mobile, message) {
  const msg = {
    to: "anasabdulkareem99@gmail.com",
    from: "speedcodecompany@gmail.com",
    subject: "Enquiry from megamind website",
    html: `<strong>Name : ${fullName} <br/> Email : ${email} <br/> Mobile : ${mobile} <br/>  Company : ${companyName} <br/> Message : ${message}</strong>`,
  };
  sgMail.send(msg).then(
    () => { console.log("mail sent successfully") },
    (error) => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
}
export default sendEmail
