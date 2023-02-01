import connectDB from "../../../utils/dbConnection";
import Enquiry from "../../../../models/EnquiryModel";
import sendEmail from "../../../utils/sendMail";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  const { fullName, companyName, email, mobile, message } = req.body;
  console.log("Connecting DB...");
  await connectDB();
  console.log("DB connected");
  // sendEmail(fullName, companyName, email, mobile, message);
  try {
    const mail = Enquiry.create(req.body);
    await Enquiry.save(mail);
    res.status(200).json(mail);

  } catch (error) {
    console.log(error)
    res.status(200).json(error.message);
  }
}