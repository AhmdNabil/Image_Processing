"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import server API
const express_1 = __importDefault(require("express"));
// Import module path
const path_1 = __importDefault(require("path"));
// Import function and variables that will be used
const imgUtils_1 = require("../utilities/imgUtils");
// use routes and middlewares
const imgroutes = express_1.default.Router();
imgroutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.name;
    const width = req.query.width;
    const height = req.query.height;
    // if there is a value to width and height 
    // resize the image
    // then save it in thumbs file with its new size
    if (parseInt(width) > 0 && parseInt(height) > 0) {
        const mainPath = path_1.default.join(__dirname, '../../images/');
        const thumbs = path_1.default.join(__dirname, '../../images/thumbs/thumb_' + parseInt(width) + 'x' + parseInt(height) + '-' + name);
        // making thumbs directory if it is not found
        yield (0, imgUtils_1.createDir)(mainPath, 'thumbs/')
            .catch((err) => {
            console.log('Error:', err);
        })
            .then((data) => {
            console.log('Found', data);
        });
        yield (0, imgUtils_1.file)(thumbs)
            .catch((err) => __awaiter(void 0, void 0, void 0, function* () {
            console.log('Look at:', (thumbs), err);
            console.log('Resize');
            yield (0, imgUtils_1.resize)(req.query)
                .then((filePath) => {
                res.sendFile(filePath);
            })
                .catch((err) => {
                console.log('Error in process', err);
                res.status(404).send('Error in process');
            });
        }))
            .then(() => {
            res.sendFile(thumbs);
        });
    }
    else {
        res.status(404).send('wrong dimensions');
    }
    // if the file isnt exist send error message
    if (!name) {
        res.status(404).send('no file');
        return;
    }
    // if the user didnt add dimensions 
    // send a message it is found before 
    // we can add the image bath also 
    if (!width && !height) {
        const place = path_1.default.join(__dirname, '../../images/full/' + name);
        yield (0, imgUtils_1.file)(place)
            .catch((err) => {
            res.status(404).send(err);
        })
            .then(() => {
            console.log('Found before');
            res.sendFile(place);
        });
    }
}));
exports.default = imgroutes;
