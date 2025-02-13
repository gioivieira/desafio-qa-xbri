"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopServer = exports.startServer = void 0;
const index_1 = __importDefault(require("./index"));
let server;
const startServer = (port = 3003) => {
    return new Promise((resolve) => {
        server = index_1.default.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}.`);
            resolve();
        });
    });
};
exports.startServer = startServer;
const stopServer = () => {
    return new Promise((resolve) => {
        if (server) {
            server.close(() => {
                console.log('Servidor encerrado.');
                resolve();
            });
        }
        else {
            resolve();
        }
    });
};
exports.stopServer = stopServer;
if (require.main === module) {
    (0, exports.startServer)();
}
//# sourceMappingURL=server.js.map