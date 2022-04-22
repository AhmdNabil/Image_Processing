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
// import modules
const path_1 = __importDefault(require("path"));
// Define the functions in the utilises file
const imgUtils_1 = require("../../utilities/imgUtils");
const imgUtils_2 = require("../../utilities/imgUtils");
// testing starts here
describe(' Utility testing', () => {
    // Test if there is an image or not
    it('should find image', () => __awaiter(void 0, void 0, void 0, function* () {
        const filePath = path_1.default.join(__dirname, '../../images/full/cantfind.jpg');
        yield expectAsync((0, imgUtils_2.file)(filePath)).toBeRejected();
    }));
    // test the extention of the tmage
    it('file extention must be jpg', () => __awaiter(void 0, void 0, void 0, function* () {
        const paramas = {
            name: 'palmtunnel.abc',
            width: '200',
            height: '200'
        };
        yield expectAsync((0, imgUtils_1.resize)(paramas)).toBeRejected();
    }));
});
