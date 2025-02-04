import pool from '../config/database.js'

const Pengguna = {
    getAll: async () => {
        const [rows] = await pool.query('SELECT * from pengguna')

        return rows
    },

    getById: async (id) => {
        const [rows] = await pool.query("SELECT * FROM pengguna WHERE id = ?", [id]);
        return rows[0]; 
    },

    create: async (data) => {
        const { nama, email, password } = data

        await pool.query('INSERT INTO pengguna (nama, email, password) VALUES (?, ?, ?)', [nama, email, password])
    },

    update: async (id, { nama, email, password }) => {
        await pool.query("UPDATE pengguna SET nama = ?, email = ?, password = ? WHERE id = ?", [nama, email, password, id]);
    },

    delete: async (id) => {
        await pool.query('DELETE FROM pengguna WHERE id = ?', [id])
    }
}

export default Pengguna;