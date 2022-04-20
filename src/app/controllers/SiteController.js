const res = require('express/lib/response');

class SiteController {
    // [GET] /home
    home(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
