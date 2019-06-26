const websiteDao = require('./WebsiteDao')
const websiteModel = require('../models/layout/WebsiteModel')

findPagesForWebsite = websiteId =>
    websiteDao.findWebsiteById(websiteId)
        .then(website => website.pages)

createPage = (websiteId, page) =>
    websiteDao.appendPage(websiteId, page)

updatePage = (websiteId, pageId, page) =>
    websiteDao.updatePage(websiteId, pageId, page)

findPageById = (websiteId, pageId) =>
    websiteDao.findWebsiteById(websiteId)
        .then(website => website.pages.id(pageId))

deletePage = (websiteId,pageId) =>
    websiteModel.update({_id:websiteId}, {$pull: {pages: {_id: pageId}}})


module.exports = {
    findPagesForWebsite,
    createPage,
    findPageById,
    updatePage,
    deletePage
}