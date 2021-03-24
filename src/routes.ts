import { Router } from 'express';
import { UserController } from './controllers/userController';

const router = Router();

const usersController = new UserController();

router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUserById);
router.post('/users', usersController.createUsers);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.removeUser);

export { router };