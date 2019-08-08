"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.end("hello, world");
});
app.listen(3000, function () {
    console.log("server is listenning");
});
//# sourceMappingURL=server.js.map