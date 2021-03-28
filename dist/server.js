"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
typeorm_1.createConnection();
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(3333, function () { return console.log('Server is runnning!'); });
