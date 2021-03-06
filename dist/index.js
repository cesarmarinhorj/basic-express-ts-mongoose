"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3100;
const app = new app_1.App().express;
app.listen(port, (err) => err ? console.log(err) : console.log(`server is listening on ${port}`));
//# sourceMappingURL=index.js.map