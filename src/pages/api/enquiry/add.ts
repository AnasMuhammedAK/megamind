import connectDB from "../../../utils/dbConnection";
import Enquiry from "../../../../models/EnquiryModel";
// import sendEnquiryMail from "../../../utils/sendMail";
import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "../../../utils/sendMail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Connecting DB...");
  await connectDB();
  console.log("DB connected");
  console.log(req.body);
  const { fullName, companyName, email, mobile, message } = req.body;
  const to = "anasmon800@gmail.com";
  sendEmail(fullName, companyName, email, mobile, message)
  res.status(200).json({ name: "John Doe" });
}
