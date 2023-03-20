import { Category } from "../models/Category.js";

export const makeCategory = async (req, res) => {
    try {
        const { name } = req.body
        const newCategory = await Category.create({
            name
        })
        return res.status(200).json({category: newCategory})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getCategories = async (req, res) => {
    try {
        const categoryes = await Category.findAll()
        return res.status(200).json(categoryes)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}