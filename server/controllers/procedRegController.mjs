import { procedRegModel } from "../models/procedRegModel.mjs"
import { procedureModel } from "../models/procedureModel.mjs";
import { procedReg } from "../routes/procedRegRoutes.mjs";


const procedRegController = {
    procedRegList: 
    async (req, res) => {
        try {
            const procedRegList = await procedRegModel.procedRegList();
            if(!procedRegList){
               return res.status(400).json({status:'err', msg: 'Procedure registration list not get'})
            }
            res.status(200).json({status: 'ok', msg: 'Procedure registration list get successfully', data: procedRegList})
            
        } catch (error) {
            console.error(error);
        }
    },
    procedRegCreate: 
     async (req, res) => {
        const {reg_date, reg_time, verified, new_registr, user_id, procedure_id} = req.body
        try {
            const procedRegCreate = await procedRegModel.procedRegCreate(reg_date, reg_time, verified, new_registr, user_id, procedure_id);
            if(!procedRegCreate){
                return res.status(400).json({status: 'err', msg: 'Procedure registration failed'})
            }
            res.status(200).json({status:'ok', msg: 'Procedure registered successfully'})
        } catch (error) {
           console.error(error); 
        }
     },

     procedRegUpdate: async (req, res) => {
        const {id} = req.params;
        const {reg_date, reg_time, verified, new_registr, user_id, procedure_id} = req.body;
        try {
            const procedRegUpdate = await procedRegModel.procedRegUpdate(reg_date, reg_time, verified, new_registr, user_id, procedure_id, id)
            if(procedRegUpdate === 0){
               return res.status(400).json({status:'err', msg: 'Registration is not updated'})
            }
            res.status(200).json({status:'ok', msg: 'Registration updated successfully'})
        } catch (error) {
            console.error(error);            
        }
     },

     procedRegDelete: async (req, res) => {
        const {id} = req.params;
        try {
            const procedRegDel = await procedRegModel.procedRegDelete(id);
            if(procedRegDel === 0){
                return res.status(400).json({status:'err', msg:'Registration is not deleted'})
            }
            res.status(200).json({status:'ok', msg:'Registration deleted'})
        } catch (error) {
            console.error(error);
        }
     }

}

export {procedRegController}