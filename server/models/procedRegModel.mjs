import { pool } from "../postgresdb/postgresConnection.mjs";

const procedRegModel = {
    procedRegList:  async () => {
        try {
            const procedRegList = await pool.query(`SELECT * FROM registration ORDER BY id ASC`)
            return procedRegList.rows        
        } catch (error) {
            console.error(error)
        }
        },
    procedRegCreate: async (reg_date, reg_time, verified, new_registr, user_id, procedure_id) => {
        try {
           const procedRegAdd = await pool.query(`
            INSERT INTO registration 
            (reg_date, reg_time, verified, new_registration, user_id, procedure_id)
            VALUES ($1, $2, $3, $4, $5, $6)`, [reg_date, reg_time, verified, new_registr, user_id, procedure_id]);
            return procedRegAdd.rowCount;
        } catch (error) {
            console.log(error);
            
        }
    },
    procedRegUpdate: async(reg_date, reg_time, verified, new_registr, user_id, procedure_id, id) => {
        const procedRegChange = await pool.query(`
            UPDATE registration 
            SET 
            reg_date = $1, 
            reg_time = $2, 
            verified = $3, 
            new_registration = $4,
            user_id = $5, 
            procedure_id = $6
            WHERE
            id = $7;`,[reg_date, reg_time, verified, new_registr, user_id, procedure_id, id])
            return procedRegChange.rowCount;
    },
    procedRegDelete: async (id) => {
        try {
            const procedRegRemove = await pool.query(`DELETE from registration WHERE id = $1;`, [id]);
            return procedRegRemove.rowCount;
        } catch (error) {
            console.error(error);
        }
    }
}

export {procedRegModel}