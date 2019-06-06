"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3100;
app_1.app.listen(port, (err) => err ? console.log(err) : console.log(`server is listening on ${port}`));
//# sourceMappingURL=index.js.map