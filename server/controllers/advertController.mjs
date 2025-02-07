import { advertModel } from "../models/advertModel.mjs";

const advertController = {
  listAdvert: async (req, res) => {
    try {
      const getList = await advertModel.getAdvert();
      if (!getList) {
        return res.status(409).json({ status: "err", msg: "No advert data" });
      }
      res
        .status(200)
        .json({
          status: "ok",
          msg: "Advert data get successfully",
          data: getList,
        });
    } catch (error) {
      console.error(error);
    }
  },
  createAdvert: async (req, res) => {
    const { title, description, price, photo, user_id, category_id } = req.body;
    try {
      const createAdvert = await advertModel.addAdvert(
        title,
        description,
        price,
        photo,
        user_id,
        category_id
      );
      if (!createAdvert === 0) {
        return res
          .status(409)
          .json({ status: "err", msg: "New advert NOT created" });
      }
      res
        .status(200)
        .json({ status: "ok", msg: "Advert craeted successfully" });
    } catch (error) {
      console.error(error);
    }
  },

  updateAdvert: async (req, res) => {
    const { id } = req.params;
    const { title, description, price, photo, user_id, category_id } = req.body;
    try {
      const updateAdvert = await advertModel.updateAdvert(
        title,
        description,
        price,
        photo,
        user_id,
        category_id,
        id
      );
      if (updateAdvert === 0) {
        return res
          .status(409)
          .json({ status: "err", msg: "New advert NOT updated" });
      }
      res
        .status(200)
        .json({ status: "ok", msg: "Advert updated successfully" });
    } catch (error) {
      console.error(error);
    }
  },

  deleteAdvert: async (req, res) => {
    const { id } = req.params;
    try {
      const deleteAdvert = await advertModel.deleteAdvert(id);
      if (!deleteAdvert === 0) {
        return res
          .status(409)
          .json({ status: "err", msg: "Advert NOT deleted" });
      }
      res
        .status(200)
        .json({ status: "ok", msg: "Advert deleted successfully" });
    } catch (error) {
      console.error(error);
    }
  },
};

export { advertController };
