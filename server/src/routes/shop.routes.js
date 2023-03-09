import { Router } from "express";
import { editShop, getShop, getShops, makeShop, suprShop } from "../controllers/shop.controller.js";

const router = Router()

router.post('/shop', makeShop);
router.get('/shop', getShops);
router.get('/shop/:id', getShop);
router.put('/shop/:id', editShop);
router.delete('/shop/:id', suprShop);

export default router;