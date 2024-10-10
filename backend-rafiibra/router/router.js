import express from "express";
import { createEvent, deleteEvent, getAllEvents, getEventById, updateEvent } from "../controller/eventController.js";
import { createKategoriAcara, deleteKategoriAcara, getAllKategoriAcara, getKategoriAcaraById, updateKategoriAcara } from "../controller/kategori_acaraController.js";
import { createPenyelenggara, deletePenyelenggara, getAllPenyelenggara, getPenyelenggaraById, updatePenyelenggara } from "../controller/penyelenggaraController.js";
import { createPeserta, deletePeserta, getAllPeserta, getPesertaById, updatePeserta } from "../controller/pesertaController.js";
import { createPendaftaran, deletePendaftaran, getAllPendaftaran, getPendaftaranById, updatePendaftaran } from "../controller/pendaftaranController.js";
const router = express.Router();

// Event routes
router.post('/events', createEvent);
router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

// Kategori Acara routes
router.post('/kategori-acara', createKategoriAcara);
router.get('/kategori-acara', getAllKategoriAcara);
router.get('/kategori-acara/:id', getKategoriAcaraById);
router.put('/kategori-acara/:id', updateKategoriAcara);
router.delete('/kategori-acara/:id', deleteKategoriAcara);

// Penyelenggara routes
router.post('/penyelenggara', createPenyelenggara);
router.get('/penyelenggara', getAllPenyelenggara);
router.get('/penyelenggara/:id', getPenyelenggaraById);
router.put('/penyelenggara/:id', updatePenyelenggara);
router.delete('/penyelenggara/:id', deletePenyelenggara);

// Peserta routes
router.post('/peserta', createPeserta);
router.get('/peserta', getAllPeserta);
router.get('/peserta/:id', getPesertaById);
router.put('/peserta/:id', updatePeserta);
router.delete('/peserta/:id', deletePeserta);

// Pendaftaran routes
router.post('/pendaftaran', createPendaftaran);
router.get('/pendaftaran', getAllPendaftaran);
router.get('/pendaftaran/:id', getPendaftaranById);
router.put('/pendaftaran/:id', updatePendaftaran);
router.delete('/pendaftaran/:id', deletePendaftaran);

export default router;