import { Schema, model, models } from 'mongoose'

const dateNow = new Date()
const EnquirySchema = new Schema({
    fullName: String,
    email: String,
    companyName: String,
    mobile: Number,
    message: String,
    date: {
        type: Date,
        default: dateNow
    }
}, { timestamps: true })

const Enquiry = models.Enquiry || model("Enquiry", EnquirySchema)

export default Enquiry