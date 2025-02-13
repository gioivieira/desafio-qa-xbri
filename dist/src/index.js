"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createUser_1 = __importDefault(require("./endpoints/createUser"));
const getUsers_1 = __importDefault(require("./endpoints/getUsers"));
const getUserById_1 = __importDefault(require("./endpoints/getUserById"));
const updateUser_1 = __importDefault(require("./endpoints/updateUser"));
const deleteUser_1 = __importDefault(require("./endpoints/deleteUser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(getUsers_1.default);
app.use(getUserById_1.default);
app.use(createUser_1.default);
app.use(updateUser_1.default);
app.use(deleteUser_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map