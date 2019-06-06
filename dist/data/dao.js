"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schemas_1 = require("./schemas");
mongoose.connect('mongodb://localhost/mongoose1', { useNewUrlParser: true });
exports.models = {
    blog: mongoose.model('Blog', schemas_1.blogSchema)
};
//# sourceMappingURL=dao.js.map