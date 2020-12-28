
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const emailSchema = new Schema({
   email: String,
   name: String,
   h: String,
   adult: Boolean
})

const emailModel = mongoose.model('email', emailSchema, 'email');
export default emailModel;
