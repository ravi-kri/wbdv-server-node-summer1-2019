const mongoose = require('mongoose')
const ColumnSchema = require('./WidgetSchema')
const ColumnModel = mongoose.model(
    'ColumnModel', ColumnSchema
);

module.exports = ColumnModel;