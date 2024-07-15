import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

const resetIdSequence = async () => {
  try {
    const result = await pool.query(
      "SELECT pg_get_serial_sequence('users', 'id')"
    );
    const sequenceName = result.rows[0].pg_get_serial_sequence;
    await pool.query(
      `SELECT setval($1, COALESCE((SELECT MAX(id) FROM users) + 1, 1), false)`,
      [sequenceName]
    );

    console.log("DB id sequence reset successfully.");
  } catch (err) {
    console.error("Error resetting sequence:", err.message);
  }
};

export { pool, resetIdSequence };
