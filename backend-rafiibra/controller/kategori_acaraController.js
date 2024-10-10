import KategoriAcara from '../model/kategori_acaraModel.js';

// Create a new kategori acara
export const createKategoriAcara = async (req, res) => {
    try {
        const kategoriAcara = await KategoriAcara.create(req.body);
        res.status(201).json(kategoriAcara);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all kategori acara
export const getAllKategoriAcara = async (req, res) => {
    try {
        const kategoriAcara = await KategoriAcara.findAll();
        res.status(200).json(kategoriAcara);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single kategori acara by ID
export const getKategoriAcaraById = async (req, res) => {
    try {
        const kategoriAcara = await KategoriAcara.findByPk(req.params.id);
        if (kategoriAcara) {
            res.status(200).json(kategoriAcara);
        } else {
            res.status(404).json({ message: 'Kategori Acara not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a kategori acara
export const updateKategoriAcara = async (req, res) => {
    try {
        const [updated] = await KategoriAcara.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedKategoriAcara = await KategoriAcara.findByPk(req.params.id);
            res.status(200).json(updatedKategoriAcara);
        } else {
            res.status(404).json({ message: 'Kategori Acara not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a kategori acara
export const deleteKategoriAcara = async (req, res) => {
    try {
        const deleted = await KategoriAcara.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Kategori Acara not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
