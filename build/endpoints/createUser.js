"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const idGenerator_1 = require("../services/idGenerator");
const data_1 = require("../mocks/data");
const router = (0, express_1.Router)();
router.post('/users', (req, res) => {
    const idGenerator = new idGenerator_1.IdGenerator();
    const { nameUser, email } = req.body;
    const newUser = {
        id: idGenerator.generate(),
        name: nameUser,
        email
    };
    try {
        if (!nameUser || !email) {
            throw new Error('É obrigatório informar o nome e o email.');
        }
        if (typeof nameUser !== 'string' || typeof email !== 'string') {
            throw new Error('O nome e o email precisam ser strings.');
        }
        data_1.users.push(newUser);
        res.status(201).send(data_1.users);
    }
    catch (error) {
        res.status(422).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=createUser.js.map