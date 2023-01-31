import { Schema, model, models } from 'mongoose'

const EnquirySchema = new Schema({
    fullName: string,
    email: string,
    companyName: string,
    mobile: Number,
    message: string,
})

const Enquiry = models.Enquiry || model("Enquiry", EnquirySchema)

export default Enquiry