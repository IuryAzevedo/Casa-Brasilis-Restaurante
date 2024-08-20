import { Router } from "express";
import { CadastroUserController } from "./Controllers/User/CadastroUserController";
import { LoginUserController } from "./Controllers/User/LoginUserController";
import { BrazilianFoodController } from "./Controllers/ComidasBrasileiras/BrazilianFoodController";

const router = Router();

router.post('/cadastro', new CadastroUserController().handle);
router.post('/login', new LoginUserController().handle);
router.post('/cadastro-comida-brasileira', new BrazilianFoodController().handle);


export {router}