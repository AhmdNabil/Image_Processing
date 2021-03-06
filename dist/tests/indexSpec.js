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
// Import the module supertest
const supertest_1 = __importDefault(require("supertest"));
// Link the app to be testing
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
// testing the url
describe('test API', () => {
    it('root"/"returns(200)', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/');
        expect(res.status).toBe(200);
    }));
});
