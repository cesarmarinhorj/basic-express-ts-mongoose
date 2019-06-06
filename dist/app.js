"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const bodyparser = require("body-parser");
const dao_1 = require("./data/dao");
class App {
    constructor() {
        this.express = express();
        this.configure();
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
            console.log(req.body);
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
// config
exports.app = new App().express;
// app.use(bodyparser.urlencoded({extended: false}));
// app.use(bodyparser.json());
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, '../views'));
/*
app.post('/blogs', function(req, res, next) {
  console.log(req.body);
  if(req.body)
  {
    console.log(req.body);
    let _post = {
      _id: null, // precisa ter o _id
      title: req.body.title,
      author: req.body.author,
      body: req.body.body
    };
    let blog = new models.blog(_post);
    blog.save();
  }else{
    console.log('unbodyed req')
  }
  res.redirect('/hello');
 });
*/ 
//# sourceMappingURL=app.js.map