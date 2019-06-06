import {app} from './app'

const port = process.env.PORT || 3100
app.listen(port, (err) => err ? console.log(err) : console.log(`server is listening on ${port}`));