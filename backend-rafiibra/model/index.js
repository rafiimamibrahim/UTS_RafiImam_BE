import db from "../utils/connection.js";
import Event from "./eventModel.js";
import KategoriAcara from "./kategori_acaraModel.js";
import Pendaftaran from "./pendafataranModel.js";
import Penyelenggara from "./penyelenggaraModel.js";
import Peserta from "./pesertaModel.js";
// Define associations

// Event and Penyelenggara
Event.belongsTo(Penyelenggara, { as: 'penyelenggara', foreignKey: 'penyelenggaraId' });
Penyelenggara.hasMany(Event, { as: 'events', foreignKey: 'penyelenggaraId' });

// Event and KategoriAcara
Event.belongsTo(KategoriAcara, { as: 'kategoriAcara', foreignKey: 'kategoriAcaraId' });
KategoriAcara.hasMany(Event, { as: 'events', foreignKey: 'kategoriAcaraId' });

// Event and Pendaftaran
Event.hasMany(Pendaftaran, { as: 'pendaftaran', foreignKey: 'eventId' });
Pendaftaran.belongsTo(Event, { as: 'event', foreignKey: 'eventId' });

// Pendaftaran and Peserta
Pendaftaran.belongsTo(Peserta, { as: 'peserta', foreignKey: 'pesertaId' });
Peserta.hasMany(Pendaftaran, { as: 'pendaftaran', foreignKey: 'pesertaId' });

await Penyelenggara.sync()
await KategoriAcara.sync()
await Event.sync()
await Peserta.sync()
await Pendaftaran.sync()
await db.sync(); 