import Penyelenggara from '../model/penyelenggaraModel.js';

// Create a new penyelenggara
export const createPenyelenggara = async (req, res) => {
    try {
        const penyelenggara = await Penyelenggara.create(req.body);
        res.status(201).json(penyelenggara);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all penyelenggara
export const getAllPenyelenggara = async (req, res) => {
    try {
        const penyelenggara = await Penyelenggara.findAll();
        res.status(200).json(penyelenggara);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single penyelenggara by ID
export const getPenyelenggaraById = async (req, res) => {
    try {
        const penyelenggara = await Penyelenggara.findByPk(req.params.id);
        if (penyelenggara) {
            res.status(200).json(penyelenggara);
        } else {
            res.status(404).json({ message: 'Penyelenggara not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a penyelenggara
export const updatePenyelenggara = async (req, res) => {
    try {
        const [updated] = await Penyelenggara.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPenyelenggara = await Penyelenggara.findByPk(req.params.id);
            res.status(200).json(updatedPenyelenggara);
        } else {
            res.status(404).json({ message: 'Penyelenggara not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a penyelenggara
export const deletePenyelenggara = async (req, res) => {
    try {
        const deleted = await Penyelenggara.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Penyelenggara not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
