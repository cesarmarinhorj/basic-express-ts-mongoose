import * as express from 'express'
import {models} from './data/dao';

class App {
  public express

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
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
      let blog = new models.blog({title: 'teste'});
      blog.save(function (err) {
        if (err) return err;
      });
      res.json(blog);
    });

    router.post('/blogs', function(req, res, next) { 
      if(req.body)
      {
        console.log(req.body);
        let _post = {
          title: req.body.title
        };
        let blog = new models.blog(_post);
        blog.save();       
        res.redirect('/hello');  
      }
     });
    
    router.get('/blogs/teste', (req, res) => {
      let _res = {};

      models.blog
        .findOne({ title: 'teste' }, function(error, _blog) {
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

export default new App().express;