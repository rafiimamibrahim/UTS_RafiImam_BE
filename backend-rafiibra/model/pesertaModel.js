import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';

const Peserta = db.define('Peserta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  noTelepon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alamat: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tanggalLahir: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  jenisKelamin: {
    type: DataTypes.ENUM('Laki-laki', 'Perempuan', 'Lainnya'),
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'peserta',
  timestamps: true,
});

export default Peserta;
