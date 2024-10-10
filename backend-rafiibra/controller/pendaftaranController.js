import Pendaftaran from '../model/pendafataranModel.js';

// Create a new pendaftaran
export const createPendaftaran = async (req, res) => {
    try {
        const pendaftaran = await Pendaftaran.create(req.body);
        res.status(201).json(pendaftaran);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all pendaftaran
export const getAllPendaftaran = async (req, res) => {
    try {
        const pendaftarans = await Pendaftaran.findAll();
        res.status(200).json(pendaftarans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single pendaftaran by ID
export const getPendaftaranById = async (req, res) => {
    try {
        const pendaftaran = await Pendaftaran.findByPk(req.params.id);
        if (pendaftaran) {
            res.status(200).json(pendaftaran);
        } else {
            res.status(404).json({ message: 'Pendaftaran not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a pendaftaran
export const updatePendaftaran = async (req, res) => {
    try {
        const [updated] = await Pendaftaran.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPendaftaran = await Pendaftaran.findByPk(req.params.id);
            res.status(200).json(updatedPendaftaran);
        } else {
            res.status(404).json({ message: 'Pendaftaran not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a pendaftaran
export const deletePendaftaran = async (req, res) => {
    try {
        const deleted = await Pendaftaran.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Pendaftaran not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
