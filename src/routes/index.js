const newsRouter = require('./news');
const coursesRouter = require('./courses')
const meRouter = require('./me')

const site = require('./site');
function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/stored', meRouter);
    app.use('/', site);
}

module.exports = route;
