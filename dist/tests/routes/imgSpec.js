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
//import the modulles
const supertest_1 = __importDefault(require("supertest"));
// import the app 
const index_1 = __importDefault(require("../../index"));
const request = (0, supertest_1.default)(index_1.default);
// Testing the API - url information
describe('Test API', () => {
    // test if there is a name for the image or not
    it('image should match filename', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/images?&height=50&width=50');
        expect(res.status).toBe(404);
    }));
    // test is there a hieght or not
    it('image should have height', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/img?name=palmtunnel.jpg&width=50');
        expect(res.status).toBe(404);
    }));
    // test is there a width or not
    it('image should have width', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/img?name=palmtunnel.jpg&height=50');
        expect(res.status).toBe(404);
    }));
    // Test is the value correct or not
    it('width and height should have positive value', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/img?name=palmtunnel.jpg&height=-50&width=-50');
        expect(res.status).toBe(404);
    }));
});
