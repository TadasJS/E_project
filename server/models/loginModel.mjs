import { pool } from "../postgresdb/postgresConnection.mjs";

const loginModel = {
  checkLoginUser: async (email) => {
    try {
      const isUserAvailable = await pool.query(
        `
            SELECT users.email, users.user_name, users_secrets.password, users_roles.role_name 
            FROM users
            JOIN users_secrets ON users.id = users_secrets.userid
            JOIN users_roles ON users_secrets.roleid = users_roles.id
            WHERE email = $1`,
        [email],
      );

      if(isUserAvailable.rowCount === 0){
        return 0
      }

      return isUserAvailable.rows[0];
    } catch (error) {
      console.error(error);
    }
  },
};

export { loginModel };
