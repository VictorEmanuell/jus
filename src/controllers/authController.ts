import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { LoginDTO } from "../dtos/authDto";

const authService = new AuthService();

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const dto: LoginDTO = req.body;
        const authorization = await authService.login(dto);
        res.status(200).send({ authorization });
    } catch (error) {
        res.status(500).json({ error: "Erro ao fazer login" });
    }
};
