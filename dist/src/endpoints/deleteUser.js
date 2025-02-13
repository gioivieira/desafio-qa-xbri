"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../mocks/data");
const router = (0, express_1.Router)();
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    let userToDelete;
    try {
        const user = data_1.users.find((user) => user.id === id);
        if (user) {
            userToDelete = data_1.users.indexOf(user);
            data_1.users.splice(userToDelete, 1);
        }
        else {
            res.status(404).send('Usuário não encontrado.');
        }
        res.status(200).send('Usuário deletado com sucesso.');
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=deleteUser.js.map