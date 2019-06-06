import app from './app'
import * as path from 'path';

const port = process.env.PORT || 3100

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
});