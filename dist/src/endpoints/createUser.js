"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const idGenerator_1 = require("../services/idGenerator");
const data_1 = require("../mocks/data");
const router = (0, express_1.Router)();
router.post('/users', (req, res) => {
    const idGenerator = new idGenerator_1.IdGenerator();
    const { name, email } = req.body;
    const newUser = {
        id: idGenerator.generate(),
        name: name,
        email
    };
    try {
        if (!name || !email) {
            throw new Error('É obrigatório informar o nome e o e-mail.');
        }
        data_1.users.push(newUser);
        res.status(201).send(newUser);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=createUser.js.map