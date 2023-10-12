import mongoose from "mongoose"
import colors from "colors"


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('C0NNECTED T0 M0NG0DB C0MPASS'.bgWhite)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed)
    }
}


export default connectDB;