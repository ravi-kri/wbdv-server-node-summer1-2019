const websiteDao = require('../daos/WebsiteDao');

const findAllWebsites = () =>
    websiteDao.findAllWebsites()

const findWebsiteById = websiteId =>
    websiteDao.findWebsiteById(websiteId)

const createWebsite = (website) =>
    websiteDao.createWebsite(website)
  

const updateWebsite = (websiteId,website)  =>
    websiteDao.updateWebsite(websiteId,website)

const deleteWebsite = (websiteId) =>
    websiteDao.deleteWebsite(websiteId)

module.exports = {
    findAllWebsites,
    createWebsite,
    updateWebsite,
    deleteWebsite,
    findWebsiteById
};
