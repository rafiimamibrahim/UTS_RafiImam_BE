import Event from '../model/eventModel.js';
import Penyelenggara from '../model/penyelenggaraModel.js';
import KategoriAcara from '../model/kategori_acaraModel.js';
import Pendaftaran from '../model/pendafataranModel.js';

// Create a new event
export const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        await event.setPenyelenggara(req.body.penyelenggaraId);
        await event.setKategoriAcara(req.body.kategoriAcaraId);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all events with related data
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            include: [
                { model: Penyelenggara, as: 'penyelenggara' },
                { model: KategoriAcara, as: 'kategoriAcara' },
                { model: Pendaftaran, as: 'pendaftaran' }
            ]
        });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single event by ID with related data
export const getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id, {
            include: [
                { model: Penyelenggara, as: 'penyelenggara' },
                { model: KategoriAcara, as: 'kategoriAcara' },
                { model: Pendaftaran, as: 'pendaftaran' }
            ]
        });
        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update an event
export const updateEvent = async (req, res) => {
    try {
        const [updated] = await Event.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedEvent = await Event.findByPk(req.params.id);
            if (req.body.penyelenggaraId) {
                await updatedEvent.setPenyelenggara(req.body.penyelenggaraId);
            }
            if (req.body.kategoriAcaraId) {
                await updatedEvent.setKategoriAcara(req.body.kategoriAcaraId);
            }
            res.status(200).json(updatedEvent);
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an event
export const deleteEvent = async (req, res) => {
    try {
        const deleted = await Event.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




