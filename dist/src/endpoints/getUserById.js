"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../mocks/data");
const router = (0, express_1.Router)();
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    try {
        const user = data_1.users.find((user) => user.id === id);
        if (user) {
            res.status(200).send(user);
        }
        else {
            res.status(404).send('Usuário não encontrado.');
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=getUserById.js.map