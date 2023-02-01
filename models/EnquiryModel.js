import { Schema, model, models } from 'mongoose'

const EnquirySchema = new Schema({
    fullName: String,
    email: String,
    companyName: String,
    mobile: Number,
    message: String,
})

const Enquiry = models.Enquiry || model("Enquiry", EnquirySchema)

export default Enquiry