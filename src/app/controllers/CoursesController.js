const Course = require("../models/Course");
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class CoursesController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course)
                })
            })
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDT-gx2RXjsd3ncrfWcx0xM9rqgvQ`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {})

    }
}
 
module.exports = new CoursesController();
 