"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import express 
const express_1 = __importDefault(require("express"));
// Import the route file
const img_1 = __importDefault(require("./routes/img"));
// Build server
const app = (0, express_1.default)();
// Define the port
const port = 3000;
// Operating the server
app.get('/', (req, res) => {
    res.send("Done!!!");
});
// Making app url 
app.use('/img', img_1.default);
app.listen(port, () => {
    // show port in termenal 
    console.log("server on:", { port });
});
exports.default = app;
