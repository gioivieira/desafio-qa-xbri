"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../mocks/data");
const router = (0, express_1.Router)();
router.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    let { name } = req.body;
    try {
        if (!name) {
            throw new Error('É obrigatório informar o nome atualizado.');
        }
        if (typeof name !== 'string') {
            throw new Error('O nome precisa ser uma string.');
        }
        const user = data_1.users.find((user) => user.id === id);
        if (user) {
            user.name = name;
        }
        else {
            res.status(404).send('Usuário não encontrado.');
        }
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=updateUser.js.map