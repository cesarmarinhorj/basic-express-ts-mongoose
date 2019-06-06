import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export const blogSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title:  String,
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs:  Number
    }
});

