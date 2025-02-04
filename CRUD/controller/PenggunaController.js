import Pengguna from "../models/Pengguna.js";

const PenggunaController = {
    index: async (req, res) => {
        const pengguna = await Pengguna.getAll();

        res.render('pengguna/index', { pengguna })
    },

    create: (req, res) => {
        res.render('pengguna/create');
    },

    store: async (req, res) => {
        const { nama, email, password } = req.body;

        await Pengguna.create({ nama, email, password });
        
        res.redirect('/');
    },

    edit: async (req, res) => {
        const id = req.params.id;
        console.log("ID yang diterima:", id);
        
        const pengguna = await Pengguna.getById(id); 
        console.log("Data pengguna:", pengguna);
    
        if (!pengguna) {
            return res.status(404).send("Pengguna tidak ditemukan");
        }
    
        res.render('pengguna/edit', { pengguna }); 
    },
    

    update: async (req, res) => {
        const id = req.params.id;
        const { nama, email, password } = req.body;
        await Pengguna.update(id, { nama, email, password });  
        res.redirect('/');
    },

    delete: async (req, res) => {
        const id = req.params.id;

        await Pengguna.delete(id);

        res.redirect('/');
    }
}


export default PenggunaController;