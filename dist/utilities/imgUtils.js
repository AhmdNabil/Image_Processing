"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDir = exports.file = exports.resize = void 0;
// import modules that will be used  
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function resize(query) {
    return new Promise(function (resolve, reject) {
        // define some variables 
        const width = query['width'];
        const height = query['height'];
        const name = query['name'];
        // Define the files pathes
        const thumbs = path_1.default.join(__dirname, '../../images/thumbs/', 'thumb_' + width + 'x' + height + '-' + name);
        const place = path_1.default.join(__dirname, '../../images/full/' + name);
        // Using sharp to take width and height 
        (0, sharp_1.default)(place)
            .resize(parseInt(query['width']), parseInt(query['height']))
            .toFile(thumbs)
            .catch((err) => {
            reject(err.message);
        })
            .then(() => resolve(thumbs));
    });
}
exports.resize = resize;
function file(filePath) {
    return new Promise(function (resolve, reject) {
        fs_1.default.stat(filePath, function (err) {
            if (err) {
                reject('NO file');
            }
            else {
                resolve(filePath);
            }
        });
    });
}
exports.file = file;
function createDir(dirPath, folder) {
    return new Promise(function (resolve, reject) {
        const exist = fs_1.default.existsSync(dirPath + folder);
        if (exist) {
            resolve('FOUND!!!');
        }
        else {
            console.log('Make one!!!');
            fs_1.default.promises
                .mkdir(dirPath + folder)
                .catch((err) => {
                reject(err);
            })
                .then(() => {
                resolve("Generated!!");
            });
        }
    });
}
exports.createDir = createDir;
