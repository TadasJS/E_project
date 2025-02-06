import { pool } from "../postgresdb/postgresConnection.mjs";

const loginModel = {
  checkLoginUser: async (email, password) => {
    try {
      const isUserAvailable = await pool.query(
        `
            SELECT users.email, users.user_name, users_secrets.password, users_roles.role_name 
            FROM users
            JOIN users_secrets ON users.id = users_secrets.userid
            JOIN users_roles ON users_secrets.roleid = users_roles.id
            WHERE email = $1 and password = $2;`,
        [email, password]
      );
      return isUserAvailable.rows[0];
    } catch (error) {
      console.error(error);
    }
  },
};

export { loginModel };
