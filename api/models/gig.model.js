import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema({
    userId:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    totalStars:{
        type: Number,
        default : 0
    },
    startNumber:{
        type: Number,
        default : 0
    },
    cat: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        default : 0
    },
    cover:{
        type: String,
        required: true
    },
    images:{
        type: [String],
        required: false
    },
    shortTitle:
    {
        type: String,
        required: true
    },
    shortDesc:{
        type: String,
        required: true
    }, 
    deliveryTime:{
        type: Number,
        default : 0
    },
    revisionNumber:{
        type: Number,
        default : 0
    },
    features:{
        type: [String],
        required: false
    },
    sales:{
        type: Number,
        default : 0
    },

}, { timestamps: true });

export default mongoose.model("Gig", GigSchema);