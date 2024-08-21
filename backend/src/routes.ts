import { Router } from "express";
import { CadastroUserController } from "./Controllers/User/CadastroUserController";
import { LoginUserController } from "./Controllers/User/LoginUserController";
import { BrazilianFoodController } from "./Controllers/ComidasBrasileiras/BrazilianFoodController";
import { PastaFoodController } from "./Controllers/Massas/PastaFoodController";
import { MeatFoodController } from "./Controllers/Carnes/MeatFoodController";

const router = Router();

// Rotas de POST
router.post('/cadastro', new CadastroUserController().handle);
router.post('/login', new LoginUserController().handle);
router.post('/cadastro-comida-brasileira', new BrazilianFoodController().handle);
router.post('/cadastro-massas', new PastaFoodController().handle);
router.post('/cadastro-carnes', new MeatFoodController().handle);


//Rotas de GET

//Rotas de UPDATE

//Rotas de DELETE

export {router}