const Course = require("../models/Course");
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose')

class MeController {
  

    // [GET] /me/stored/courses 
    storedCourses(req, res, next) {
        res.render('me/stored-courses')
    }

}
 
module.exports = new MeController();
 