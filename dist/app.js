"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const bodyparser = require("body-parser");
const dao_1 = require("./data/dao");
class App {
    constructor() {
        this.express = express();
        this.configure(); // precisa configurar antes de definir as rotas
        this.mountRoutes();
    }
    configure() {
        this.express.use(bodyparser.urlencoded({ extended: false }));
        this.express.use(bodyparser.json());
        this.express.set('view engine', 'pug');
        this.express.set('views', path.join(__dirname, '../views'));
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/hello', (req, res) => {
            console.log(req.body);
            res.render('index', {
                title: 'View Test',
                message: 'Hello World!'
            });
        });
        router.get('/blogs/new', (req, res) => {
            let blog = new dao_1.models.blog({ title: 'teste' });
            blog.save(function (err) {
                if (err)
                    return err;
            });
            res.json(blog);
        });
        router.get('/blogs', (req, res) => {
            res.render('blog_form', { title: 'Blog Form' });
        });
        router.post('/blogs', function (req, res, next) {
            if (req.body) {
                console.log(req.body);
                let _post = {
                    _id: null,
                    title: req.body.title,
                    author: req.body.author,
                    body: req.body.body
                };
                let blog = new dao_1.models.blog(_post);
                blog.save();
            }
            else {
                console.log('unbodyed req');
            }
            res.redirect('/hello');
        });
        router.get('/blogs/find/title/:title', (req, res) => {
            console.log(req.params);
            dao_1.models.blog
                .findOne({ title: req.params.title }, function (error, _res) {
                if (error) {
                    return error;
                }
                console.log(_res);
                res.json(_res);
            });
        });
        this.express.use('/', router);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map