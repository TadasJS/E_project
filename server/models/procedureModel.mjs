import { pool } from "../postgresdb/postgresConnection.mjs";

const procedureModel = {
    procedureList: async () => {
        try {
            const procedList = await pool.query(`SELECT * FROM procedure ORDER BY id ASC`);
            return procedList.rows;
            
        } catch (error) {
            console.error(error);
        }
    }, 
    checkProcedure:
    async (id) => {
        const isProcedureAvailable = await pool.query(`SELECT * FROM procedure WHERE id = $1;`,[id]);
        return isProcedureAvailable.rowCount;
    },
    procedureCreate: async (name, category, time, foto) => {
        try {
            const createProced = await pool.query(`INSERT INTO procedure (name, category, time, foto)
                VALUES ($1, $2, $3, $4);`, [name, category, time, foto]);
                return createProced.rowCount;            
        } catch (error) {
            console.error(error);
        }
    },
    procedureUpdate: async(name, category, time, foto, id) => {
        try {
            const checkProcedure = getProcedure
            const updateProced = await pool.query(`
                UPDATE procedure 
                SET 
                name = $1, 
                category = $2, 
                time = $3, 
                foto = $4
                WHERE id = $5`, [name, category, time, foto, id]);
                console.log(updateProced)
                return updateProced.rowCount;
            
        } catch (error) {
            console.error(error);
        }
    },
    procedureDelete: async (id) => {
        try {
            const deleteProced = await pool.query(`DELETE FROM procedure WHERE id = $1;`, [id])
            console.log(deleteProced.rowCount)
            return deleteProced.rowCount;
            
        } catch (error) { 
            console.error(error);
        }
    }
}

export {procedureModel};