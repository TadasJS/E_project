import { pool } from "../postgresdb/postgresConnection.mjs";

const ratingModel = {
    ratingAvgByProcedure: async () => {
        try {
            const ratingAll = await pool.query(`SELECT * FROM rating ORDER BY id ASC;`)
            return ratingAll.rows;
        } catch (error) {
           console.error(error); 
        }
    },
    addRating: async (procRating, procedure_id) => {
        try {
            const addRating = await pool.query(`
                INSERT INTO rating (proc_rating, procedure_id)
                VALUES ($1, $2)`, [procRating, procedure_id]);
                return addRating.rowCount;
        } catch (error) {
            console.error(error)
        }
    }
}
export{ratingModel}