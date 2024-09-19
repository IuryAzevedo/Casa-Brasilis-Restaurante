import { Router } from "express";
//Create Controllers
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

//List Controllers
import { isAuthAuthenticated } from "./Services/middlewares/isAuthAuthenticated";
import { ListBebidasController } from "./Controllers/Bebidas/ListBebidasController";
import { ListMeatController } from "./Controllers/Carnes/ListMeatController";
import { ListBrazilianFoodController } from "./Controllers/ComidasBrasileiras/ListBrazilianFoodController";
import { ListDrinksController } from "./Controllers/Drinks/ListDrinksController";
import { ListEntrysController } from "./Controllers/Entradas/ListEntrysController";
import { ListGuarnicaoController } from "./Controllers/Guarnicao/ListGuarnicaoController";
import { ListPastaController } from "./Controllers/Massas/ListPastaController";
import { ListFishController } from "./Controllers/Peixes/ListFishController";
import { ListPizzaController } from "./Controllers/Pizzas/ListPizzaController";
import { ListReservaController } from "./Controllers/Reserva/ListReservaController";
import { ListDesertController } from "./Controllers/Sobremesa/ListDesertController";
import { UpdateBebidasController } from "./Controllers/Bebidas/UpdateBebidasController";
import { UpdateBrazilianFoodController } from "./Controllers/ComidasBrasileiras/UpdateBrazilianFoodController";
import { UpdateDrinksController } from "./Controllers/Drinks/UpdateDrinksController";
import { UpdateEntryController } from "./Controllers/Entradas/UpdateEntryController";

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
router.get("/list-bebidas", isAuthAuthenticated, new ListBebidasController().handle)
router.get("/list-carnes", isAuthAuthenticated, new ListMeatController().handle)
router.get('/list-comidas-brasileiras', isAuthAuthenticated, new ListBrazilianFoodController().handle)
router.get('list-drinks', isAuthAuthenticated, new ListDrinksController().handle)
router.get('/list-entradas', isAuthAuthenticated, new ListEntrysController().handle)
router.get('list-guarnicao', isAuthAuthenticated, new ListGuarnicaoController().handle)
router.get('/list-massas', isAuthAuthenticated, new ListPastaController().handle);
router.get('/list-peixes', isAuthAuthenticated, new ListFishController().handle);
router.get("/list-pizzas", isAuthAuthenticated, new ListPizzaController().handle);
router.get('/list-reservas', isAuthAuthenticated, new ListReservaController().handle);
router.get('/list-sobremesas', isAuthAuthenticated, new ListDesertController().handle);


//Rotas de UPDATE
router.put('edit-bebidas', isAuthAuthenticated, new UpdateBebidasController().handle)
router.put('/edit-comida-brasileira', isAuthAuthenticated, new UpdateBrazilianFoodController().handle)
router.put('edit-drinks', isAuthAuthenticated, new UpdateDrinksController().handle);
router.put('edit-entradas', isAuthAuthenticated, new UpdateEntryController().handle);


//Rotas de DELETE


export {router}