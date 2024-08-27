import mongoose from "mongoose";

class MongooseConnect {
  public static async mongooseDbConnect() {
    try {
        const mongooseConnect = await mongoose.connect("")
    } catch (error) {
        
    }
  }
}
