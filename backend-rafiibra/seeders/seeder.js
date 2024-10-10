import Event from '../model/eventModel.js';
import KategoriAcara from '../model/kategori_acaraModel.js';
import Pendaftaran from '../model/pendafataranModel.js';
import Penyelenggara from '../model/penyelenggaraModel.js';
import Peserta from '../model/pesertaModel.js';

const createSeeder = async () => {
    // Create Kategori Acara
    const kategoriAcara = await KategoriAcara.create({
        nama: "Musik",
        deskripsi: "Festival Musik terbesar di Indonesia",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    // Create Penyelenggara
    const penyelenggara = await Penyelenggara.create({
        nama: "PT. Musik Indonesia",
        email: "musikindonesia@gmail.com",
        noTelepon: "0813-2323-4333",
        alamat: "Jl. Musik No. 1, Jakarta",
        deskripsi: "Penyelenggara festival musik.",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    // Create Event
    const event = await Event.create({
        title: "Festival Musik",
        description: "Sebuah festival musik yang menampilkan berbagai artis.",
        date: new Date('2023-11-12'),
        location: "Stadion Utama Gelora Bung Karno",
        organizer: penyelenggara.nama,
        capacity: 5000,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    // Create Pendaftaran
    const pendaftaran = await Pendaftaran.create({
        nama: "John Doe",
        email: "john@gmail.com",
        noTelepon: "0823-2244-3321",
        eventId: event.id, // Menggunakan ID event yang baru dibuat
        statusPendaftaran: 'confirmed',
        tanggalPendaftaran: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    // Create Peserta
    const peserta = await Peserta.create({
        nama: "Alice Johnson",
        email: "alice@example.com",
        noTelepon: "0812-3456-7890",
        alamat: "Jl. Peserta No. 1, Jakarta",
        tanggalLahir: new Date('1995-05-15'),
        jenisKelamin: 'Perempuan',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    return { kategoriAcara, penyelenggara, event, pendaftaran, peserta };
};

const seeder = await createSeeder()
// seeder.map((a, i) => {
//         console.log(JSON.stringify(a))
//     });

// Uncomment the following lines to run the seeder
// createSeeder().then(seeder => {
//     console.log(JSON.stringify(seeder, null, 2));
// }).catch(err => {
//     console.error(err);
// });