import { Dish } from "../models/Dish.js";
import { Shop } from "../models/Shop.js";

export const makeShop = async (req, res) => {
  try {
    const { name, cuisine, logo, cat_id } = req.body;
    const shop = await Shop.create({
      name,
      cuisine,
      logo,
      cat_id,
    });
    return res.status(200).json({ Shop: shop });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getShops = async (req, res) => {
  try {
    const shops = await Shop.findAll({
      include: [
        {
          model: Dish,
          attributes: [
            "dish_id",
            "title",
            "description",
            "price",
            "ingredients",
            "image",
          ],
        },
      ],
    });
    return res.status(200).json(shops);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getShop = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findByPk(id, {
      include: [
        {
          model: Dish,
          attributes: [
            "dish_id",
            "title",
            "description",
            "price",
            "ingredients",
            "image",
          ],
        }
      ]
    });
    return res.status(200).json(shop);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const editShop = async (req, res) => {
  try {
    const { id } = req.params;
    const shop = await Shop.findByPk(id);
    shop.set(req.body);
    await shop.save();
    return res.status(200).json({
      updated: shop,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const suprShop = async (req, res) => {
  try {
    const { id } = req.params;
    await Shop.destroy({
      where: {
        shop_id: id,
      },
    })
    return res.status(200).send('Deleted properly')
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
