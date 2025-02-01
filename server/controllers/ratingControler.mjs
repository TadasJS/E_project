import { ratingModel } from "../models/ratingMdel.mjs";

const ratingController = {
   ratingList: async (req, res) => {
        try {
            const ratingList = await ratingModel.ratingAvgByProcedure();
            if(!ratingList){
                return res.status(400).json({status: "err", msg: 'get rating data failed'});
            }
            res.status(200).json({status:'ok', msg: 'Rating list get successfully', data:ratingList});
        } catch (error) {
            console.error(error);
        }
    },
    ratingAdd: async (req, res) => {
        const {procRating, procedure_id} = req.body;
        const ratingAdd = await ratingModel.addRating(procRating, procedure_id)
        if(ratingAdd === 0){
            return res.status(400).json({status:'err', msg: 'rating add error'});
        }
        res.status(200).json({staus:'ok', msg:'rating added successfully'})
    }
}
 export{ratingController}