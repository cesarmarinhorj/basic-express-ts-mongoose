"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const path = require("path");
const port = process.env.PORT || 3100;
app_1.default.set('view engine', 'pug');
app_1.default.set('views', path.join(__dirname, '../views'));
app_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map