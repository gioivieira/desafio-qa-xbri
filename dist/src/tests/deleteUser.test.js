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
describe('Inicia teste de deleção de usuário', () => {
    test('Deve deletar um usuário e retornar status 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .delete('/users/d7c5fc5b-6eec-4cd3-b985-fe818c9af04f');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Usuário deletado com sucesso.');
    }));
    test('Deve tentar deletar um usuário já deletado e retornar status 404', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(index_1.default)
            .delete('/users/d7c5fc5b-6eec-4cd3-b985-fe818c9af04f');
        expect(response.status).toBe(404);
        expect(response.text).toBe('Usuário não encontrado.');
    }));
});
//# sourceMappingURL=deleteUser.test.js.map