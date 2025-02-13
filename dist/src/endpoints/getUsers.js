"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../mocks/data");
const router = (0, express_1.Router)();
router.get('/users', (req, res) => {
    try {
        res.status(200).send(data_1.users);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.default = router;
//# sourceMappingURL=getUsers.js.map