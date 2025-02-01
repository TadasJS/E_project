import { procedureModel } from "../models/procedureModel.mjs";

const procedureController = {
    getProcedure: 
    async (req, res) => {
        try {
            const procedureList = await procedureModel.procedureList();
    
            if(!procedureList){
                res.status(409).json({status:'err', msg: `can't get procedure list`})
            }
    
            res.status(200).json({status:'ok', msg: 'procedure list get successfully', data: procedureList})
            
        } catch (error) {
            console.error(error)
        }
    },
    postProcedure: 
    async (req, res) => {
        const {name, category, time, foto} = req.body;
        try {
            const procedureCreate = await procedureModel.procedureCreate(name, category, time, foto);
            if(!procedureCreate){
                res.status(409).json({status: 'err', msg: `Can't delete procedure`})
            }
            res.status(200).json({status:'ok', msg: 'Procedure created successfully'})
            
        } catch (error) {
            console.error(error);
        }
    },
    putProcedure: 
    async (req, res) => {
        const {id} = req.params;
        const {name, category, time, foto} = req.body;
        try { 
            const procedureUpdate = await procedureModel.procedureUpdate(name, category, time, foto, id);
            if(procedureUpdate === 0){
                res.status(404).json({status: 'err', msg: 'Procedure is not updated'})
            }
            res.status(200).json({status: 'ok', msg: 'Procedure updated successfully'})
            
        } catch (error) {
            console.error(error);
        }
    },
    deleteProcedure: 
    async (req, res) => {
        const {id} = req.params;
        try {
            const procedureDelete = await procedureModel.procedureDelete(id);
            if(procedureDelete === 0){
               return res.status(400).json({status: 'err', msg:`can't delete procedure`})
            }
            res.status(200).json({status: 'ok', msg:'Procedure deleted successfully'})
            
        } catch (error) {
            console.error(error);
        }
    },
}

export {procedureController}