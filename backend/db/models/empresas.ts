import mongoose, { Mongoose, Schema } from "mongoose";

export default class DatabaseEmpresas {
  public static databaseEmpresa() {
    const scheme = new Schema({
      empresa: { type: String, required: true },
      email: { type: String, required: true },
      cnpj: { type: String, required: true },
    });
    return mongoose.model("empresas", scheme);
  }
}
