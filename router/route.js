const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const crud = require("../crud/app");




router.route("/")
                .get(crud.getAllTasks)
                .post(
                    body("title")
                        .notEmpty()
                        .withMessage("title is requride")
                        .isLength({min : 2})
                        .withMessage("at least 2 letters"),crud.creatTask)

router.route("/:taskId")
                        .get(crud.getOneTasks)
                        .patch(
                            body("title") 
                                .notEmpty()
                                .withMessage("title is requride")
                                .isLength({min : 2})
                                .withMessage("at least 2 letters"),crud.updateTask)
                        .delete(crud.deleteTask)




module.exports = router