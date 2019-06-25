
module.exports = function (app) {
    const pageService = require('../services/PageService')

    findPagesForWebsite = (req, res) =>
    pageService.findPagesForWebsite(req.params['wid'])
            .then(pages => res.json(pages))

    createPage = (req, res) =>
    pageService.createPage(req.params['wid'], req.body)
            .then(page => res.json(page))

    findPageById = (req, res) =>
    pageService.findPageById(req.params['wid'], req.params.pid)
            .then(page => res.json(page))

    updatePage = (req, res) =>
    pageService.updatePage(req.params['wid'], req.params['pid'], req.body)
            .then(status => res.json(status))

    deletePage = (req,res) =>
        pageService.deletePage(req.params['wid'], req.params['pid'])
                .then(status => res.json(status))

    app.get('/api/websites/:wid/pages', findPagesForWebsite)
    app.get('/api/websites/:wid/pages/:pid', findPageById)
    app.post('/api/websites/:wid/pages', createPage)
    app.put('/api/websites/:wid/pages/:pid', updatePage)
    app.delete('/api/websites/:wid/pages/:pid', deletePage)
}