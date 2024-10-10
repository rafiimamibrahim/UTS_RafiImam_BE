import Peserta from '../model/pesertaModel.js';

// Create a new peserta
export const createPeserta = async (req, res) => {
    try {
        const peserta = await Peserta.create(req.body);
        res.status(201).json(peserta);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all peserta
export const getAllPeserta = async (req, res) => {
    try {
        const peserta = await Peserta.findAll();
        res.status(200).json(peserta);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single peserta by ID
export const getPesertaById = async (req, res) => {
    try {
        const peserta = await Peserta.findByPk(req.params.id);
        if (peserta) {
            res.status(200).json(peserta);
        } else {
            res.status(404).json({ message: 'Peserta not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a peserta
export const updatePeserta = async (req, res) => {
    try {
        const [updated] = await Peserta.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPeserta = await Peserta.findByPk(req.params.id);
            res.status(200).json(updatedPeserta);
        } else {
            res.status(404).json({ message: 'Peserta not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a peserta
export const deletePeserta = async (req, res) => {
    try {
        const deleted = await Peserta.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Peserta not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
