import { Router } from "express";
import { CadastroUserController } from "./Controllers/User/CadastroUserController";
import { LoginUserController } from "./Controllers/User/LoginUserController";
import { BrazilianFoodController } from "./Controllers/ComidasBrasileiras/BrazilianFoodController";
import { PastaFoodController } from "./Controllers/Massas/PastaFoodController";
import { MeatFoodController } from "./Controllers/Carnes/MeatFoodController";
import { FishFoodController } from "./Controllers/Peixes/FishFoodController";
import { PizzaFoodController } from "./Controllers/Pizzas/PizzaFoodController";
import { GuarnicaoFoodController } from "./Controllers/Guarnicao/GuarnicaoFoodController";
import { EntryFoodController } from "./Controllers/Entradas/EntryFoodController";
import { DesertFoodController } from "./Controllers/Sobremesa/DesertFoodController";
import { BebidasController } from "./Controllers/Bebidas/BebidasController";
import { DrinksController } from "./Controllers/Drinks/DrinksController";

const router = Router();

// Rotas de POST
router.post('/cadastro', new CadastroUserController().handle);
router.post('/login', new LoginUserController().handle);
router.post('/cadastro-comida-brasileira', new BrazilianFoodController().handle);
router.post('/cadastro-massas', new PastaFoodController().handle);
router.post('/cadastro-carnes', new MeatFoodController().handle);
router.post('/cadastro-peixes', new FishFoodController().handle)
router.post("/cadastro-pizzas", new PizzaFoodController().handle)
router.post("/cadastro-guarnicao", new GuarnicaoFoodController().handle)
router.post('/cadastro-entradas', new EntryFoodController().handle)
router.post("/cadastro-sobremesa", new DesertFoodController().handle)
router.post("/cadastro-bebidas", new BebidasController().handle)
router.post("/cadastro-drink", new DrinksController().handle)



//Rotas de GET

//Rotas de UPDATE

//Rotas de DELETE

export {router}