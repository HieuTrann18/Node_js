const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');
class CourseController {


  //[GET] /courses/:slug
  async show(req, res, next) {
    try {
      let course = await Course.findOne({ slug: req.params.slug });
      if (!course) {
        return res.status(404).send('Course not found');
      }
      res.render('courses/show', { course: mongooseToObject(course) });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CourseController();
