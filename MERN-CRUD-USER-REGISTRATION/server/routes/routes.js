import express from "express";
import { getUsers, saveUser, getUser, editUser, deleteUser } from "../controller/controller.js";
const route = express.Router()

route.get('/all',getUsers)
route.post('/add',saveUser)
route.get('/:id',getUser)
route.put('/edit/:id',editUser)
route.delete('/:id',deleteUser)

export default route; 