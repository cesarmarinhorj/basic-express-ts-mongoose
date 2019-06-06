import * as mongoose from 'mongoose';
import { blogSchema } from './schemas';

mongoose.connect('mongodb://localhost/mongoose1', {useNewUrlParser: true});

export const models = {
    blog: mongoose.model('Blog', blogSchema)
}
