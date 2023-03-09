import { Dish } from "../models/Dish.js";

export const createDish = async (req, res) => {
  try {
    const { title, description, price, ingredients, image, shop_id } = req.body;
    const newDish = await Dish.create({
      title,
      description,
      price,
      ingredients,
      image,
      shop_id,
    });
    return res.status(200).json({
      created: newDish,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDishes = async (req, res) => {
  try {
    const dishes = await Dish.findAll();
    return res.status(200).json(dishes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editDish = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findByPk(id);
    dish.set(req.body);
    await dish.save();
    return res.status(200).json({
      updated: dish,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDish = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findByPk(id);
    return res.status(200).json(dish)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const suprDish = async (req, res) => {
  try {
    const { id } = req.params;
    await Dish.destroy({
        where: {
            dish_id: id
        }
    })
    return res.status(200).send('Deleted properly')
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
