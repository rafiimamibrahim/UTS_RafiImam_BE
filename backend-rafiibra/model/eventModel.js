import Penyelenggara from './penyelenggaraModel.js';
import KategoriAcara from './kategori_acaraModel.js';
import Pendaftaran from './pendafataranModel.js';

// Associations will be defined after the model is created


import { DataTypes } from 'sequelize';
import db from '../utils/connection.js';

const Event = db.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  organizer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'events',
  timestamps: true,
});


export default Event



