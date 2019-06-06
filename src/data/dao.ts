import * as mongoose from 'mongoose';
import { blogSchema } from './schemas';


let MONGO_HOST = process.env.MONGO_HOST || "localhost";
let MONGO_PORT = process.env.MONGO_PORT || 27017;
let MONGO_DATABASE = process.env.MONGO_DATABASE || "mongoose1";
let connectionString = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

mongoose.connect(connectionString, {useNewUrlParser: true});

export const models = {
    blog: mongoose.model('Blog', blogSchema)
}
