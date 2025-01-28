import { pool } from "../postgresdb/postgresConnection.mjs";

const registerModel = {
  checkUser: async (email) => {
    try {
      const checkUserEmail = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email],
      );
      return checkUserEmail.rowCount;
    } catch (error) {
      console.error(error);
    }
  },

  createNewUser: async (username, email, password, role) => {
    const newUser = await pool.query(
      "INSERT INTO users (user_name, email) VALUES ($1, $2);",
      [username, email],
    );

    if (newUser.rowCount === 0) {
      return 0;
    }

    const findUserId = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );

    if (findUserId.rowCount === 0) {
      return 0;
    }

    const userId = findUserId.rows[0].id;

    const savePassword = await pool.query(
      "INSERT INTO users_secrets (userid, password, roleid ) VALUES ($1, $2, $3);",
      [userId, password, role],
    );

    return savePassword.rowCount;
  },
};

export { registerModel };
