import * as path from 'path';
import * as express from 'express'
import * as bodyparser from 'body-parser';
import {models} from './data/dao';

export class App {
  public express

  constructor () {
    this.express = express();
    this.configure(); // precisa configurar antes de definir as rotas
    this.mountRoutes();
  }

  private configure() {
    this.express.use(bodyparser.urlencoded({extended: false}));
    this.express.use(bodyparser.json());
    this.express.set('view engine', 'pug');
    this.express.set('views', path.join(__dirname, '../views'));    
  }

  private mountRoutes (): void {
    const router = express.Router();

    router.get('/hello', (req, res) => {
      console.log(req.body);
      res.render('index', {
        title: 'View Test',
        message: 'Hello World!'
      });
    });

    router.get('/blogs/new', (req, res) => {
      let blog = new models.blog({title: 'teste'});
      blog.save(function (err) {
        if (err) return err;
      });
      res.json(blog);
    });


    router.get('/blogs', (req, res) => {
      res.render('blog_form', {title: 'Blog Form'});
    });

    router.post('/blogs', function(req, res, next) {
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
    
    router.get('/blogs/find/title/:title', (req, res) => {
      console.log(req.params);
      models.blog
        .findOne({ title: req.params.title }, function(error, _res) {
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
