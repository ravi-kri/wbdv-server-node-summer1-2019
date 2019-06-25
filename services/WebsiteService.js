const websiteDao = require('../daos/WebsiteDao');

const findAllWebsites = () =>
    websiteDao.findAllWebsites()

const findWebsiteById = websiteId =>
    websiteDao.findWebsiteById(websiteId)

const createWebsite = (website) =>
    websiteDao.createWebsite(website)
  

const updateWebsite = (websiteId,website)  =>
    websiteDao.updateWebsite(websiteId,website)

const deletePage = (websiteId) =>
    websiteDao.deletePage(websiteId)

module.exports = {
    findAllWebsites,
    createWebsite,
    updateWebsite,
    deletePage,
    findWebsiteById
};
