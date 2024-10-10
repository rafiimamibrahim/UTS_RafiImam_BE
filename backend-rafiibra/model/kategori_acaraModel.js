import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';

const KategoriAcara = db.define('KategoriAcara', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deskripsi: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'kategori_acara',
  timestamps: true,
});

export default KategoriAcara;
