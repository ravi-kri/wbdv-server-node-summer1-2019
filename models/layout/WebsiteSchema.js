const mongoose = require('mongoose')
const PageSchema = require('./PageSchema')
const WebsiteSchema = mongoose.Schema({
    title: String,
    auther: String,
    pages: [PageSchema]
}, {collection: 'websites'});
module.exports = WebsiteSchema