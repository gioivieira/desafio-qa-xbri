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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const server_1 = require("../server");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, server_1.startServer)();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, server_1.stopServer)();
}));
describe('Inicia teste de criação de usuário', () => {
    test('Deve criar um novo usuário e retornar status 201', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/users')
            .send({
            name: 'Roberto Souza',
            email: 'roberto@email.com'
        });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    }));
    test('Deve retornar erro 400 ao tentar criar um usuário sem nome', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .post("/users")
            .send({
            email: "teste@email.com"
        });
        expect(response.status).toBe(400);
        expect(response.text).toBe('É obrigatório informar o nome e o e-mail.');
    }));
    test('Deve retornar erro 400 ao tentar criar um usuário sem e-mail', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .post("/users")
            .send({
            nome: "Teste"
        });
        expect(response.status).toBe(400);
        expect(response.text).toBe('É obrigatório informar o nome e o e-mail.');
    }));
});
//# sourceMappingURL=createUser.test.js.map