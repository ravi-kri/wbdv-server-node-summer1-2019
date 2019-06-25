const pageDao = require('../daos/PageDao');

const findPagesForWebsite = wid =>
    pageDao.findPagesForWebsite(wid)

const findPageById = pid =>
    pageDao.findPageById(pid)

const createPage = (websiteId, page) =>
    pageDao.createPage(websiteId, page)

const updatePage = (websiteId, pageId, page)  =>
    pageDao.updatePage(websiteId, pageId, page)

const deletePage = (websiteId,pageId) =>
    pageDao.deletePage(websiteId,pageId)

module.exports = {
    findPagesForWebsite,
    findPageById,
    createPage,
    updatePage,
    deletePage
};
