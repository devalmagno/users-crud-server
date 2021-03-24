import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
    async getUsers(req: Request, res: Response) {
        const usersRepository = getCustomRepository(UsersRepository);
        const users = await usersRepository.find();

        res.status(200).json(users);
    }

    async getUserById(req: Request, res: Response) {
        const usersRepository = getCustomRepository(UsersRepository);
        const { id } = req.params;

        const user = await usersRepository.findOne({
            id
        });

        return res.status(200).json(user);
    }

    async createUsers(req: Request, res: Response) {
        const usersRepository = getCustomRepository(UsersRepository);
        const { name, email, cpf, isActive } = req.body;        

        const userAlreadyExists = await usersRepository.findOne({
            email
        }) || await usersRepository.findOne({
            cpf
        });

        if (userAlreadyExists) {
            return res.status(400).json({ error: "User already exits." });
        }

        const newUser = usersRepository.create({
            name, email, cpf, isActive
        })

        await usersRepository.save(newUser);

        return res.status(201).json(newUser);
    }

    async updateUser(req: Request, res: Response) {
        const usersRepository = getCustomRepository(UsersRepository);
        const { id } = req.params;
        const user = await usersRepository.findOne({ id });

        if (!user) {
            return res.status(404).json({ error: "User doesn't exits!! "});
        }

        usersRepository.merge(user, req.body);

        const results = await usersRepository.save(user);

        return res.status(200).json(results);
    }

    async removeUser(req: Request, res: Response) {
        const usersRepository = getCustomRepository(UsersRepository);
        const { id } = req.params;
        const user = await usersRepository.findOne({ id });

        if (!user) {
            return res.status(404).json({ error: "User doesn't exits!!"});
        }

        await usersRepository.remove(user);

        return res.status(200).json(user);
    }
}

export { UserController };