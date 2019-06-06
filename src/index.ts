import {App} from './app'

const port = process.env.PORT || 3100
const app = new App().express;
app.listen(port, (err) => err ? console.log(err) : console.log(`server is listening on ${port}`));
