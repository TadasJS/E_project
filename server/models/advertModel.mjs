import { pool } from "../postgresdb/postgresConnection.mjs"

const advertModel = {
    getAdvert: async () => {
       try {
           const getAdvertList = await pool.query(`SELECT * FROM advert ORDER BY id`)
            console.log(getAdvertList.rows);
            
            return getAdvertList.rows
        
       } catch (error) {
        console.error(error)
    }         
      
    },

    addAdvert: async (title, description, price, photo, user_id, category_id) => {
        try {
            const addNewAdvert = await pool.query(`INSERT INTO advert (title, description, price, photo, user_id, category_id )
            VALUES ( $1, $2, $3, $4, $5, $6 )`, [title, description, price, photo, user_id, category_id]);

            return addNewAdvert.rowCount
            
        } catch (error) {
            
        }    
    },

    updateAdvert: async (title, description, price, photo, user_id, category_id, id) => {
        try {
            const updateAdvert = await pool.query(`
                UPDATE advert 
                SET 
                title = $1,
                description = $2,
                price = $3,
                photo = $4,
                user_id = $5,
                category_id = $6
                WHERE
                id = $7;`,[title, description, price, photo, user_id, category_id, id]);
               console.log(updateAdvert.rowCount)
            return updateAdvert.rowCount;
            
        } catch (error) {
            console.error(error);
        }    
    },
    deleteAdvert: async (id) => {

        const deleteAdvert = await pool.query(`DELETE FROM advert WHERE id = $1;`, [id])

        return deleteAdvert.rowCount;
    } 
}

export{advertModel}