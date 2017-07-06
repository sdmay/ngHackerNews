"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
function setRoutes(app) {
    var router = express.Router();
    // Apply the routes to our application with the prefix /api
    app.use('/', router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map