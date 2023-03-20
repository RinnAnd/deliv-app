import { Router } from "express";
import { getCategories, makeCategory } from "../controllers/category.controller.js";

const router = Router()

router.post('/category', makeCategory);
router.get('/category', getCategories);

export default router;