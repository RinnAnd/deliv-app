import { Router } from "express";
import { createDish, editDish, getDish, getDishes, suprDish } from "../controllers/dish.controller.js";

const router = Router()

router.post('/dish', createDish);
router.get('/dish', getDishes);
router.get('/dish/:id', getDish);
router.put('/dish/:id', editDish);
router.delete('/dish/:id', suprDish);

export default router;