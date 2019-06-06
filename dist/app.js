"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dao_1 = require("./data/dao");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/hello', (req, res) => {
            res.render('index', {
                title: 'View Test',
                message: 'Hello World!'
            });
        });
        router.get('/blogs', (req, res) => {
            res.json({});
        });
        router.get('/blogs/new', (req, res) => {
            let blog = new dao_1.models.blog({ title: 'teste' });
            blog.save(function (err) {
                if (err)
                    return err;
            });
            res.json(blog);
        });
        router.post('/blogs', function (req, res, next) {
            if (req.body) {
                console.log(req.body);
                let _post = {
                    title: req.body.title
                };
                let blog = new dao_1.models.blog(_post);
                blog.save();
                res.redirect('/hello');
            }
        });
        router.get('/blogs/teste', (req, res) => {
            let _res = {};
            dao_1.models.blog
                .findOne({ title: 'teste' }, function (error, _blog) {
                if (error) {
                    return error;
                }
                console.log(_blog);
                _res = _blog;
            });
            res.json(_res);
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map