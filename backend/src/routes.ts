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
import { ReservaController } from "./Controllers/Reserva/ReservaController";
import { isAuthAuthenticated } from "./Services/middlewares/isAuthAuthenticated";

const router = Router();

// Rotas de POST
router.post('/cadastro', new CadastroUserController().handle);
router.post('/login', new LoginUserController().handle);
router.post('/cadastro-comida-brasileira', isAuthAuthenticated, new BrazilianFoodController().handle);
router.post('/cadastro-massas', isAuthAuthenticated, new PastaFoodController().handle);
router.post('/cadastro-carnes', isAuthAuthenticated, new MeatFoodController().handle);
router.post('/cadastro-peixes', isAuthAuthenticated, new FishFoodController().handle);
router.post("/cadastro-pizzas", isAuthAuthenticated, new PizzaFoodController().handle);
router.post("/cadastro-guarnicao", isAuthAuthenticated, new GuarnicaoFoodController().handle);
router.post('/cadastro-entradas', isAuthAuthenticated, new EntryFoodController().handle);
router.post("/cadastro-sobremesa", isAuthAuthenticated, new DesertFoodController().handle);
router.post("/cadastro-bebidas", isAuthAuthenticated, new BebidasController().handle);
router.post("/cadastro-drink", isAuthAuthenticated, new DrinksController().handle);
router.post('/cadastro-reserva', isAuthAuthenticated, new ReservaController().handle);


//Rotas de GET






//Rotas de UPDATE

//Rotas de DELETE

export {router}