 const Course = require('../models/Course');
 const {multipeMongooseToObject} = require('../../utils/mongoose');
class SiteController {
  //[GET] /
  async index(req, res, next) {

    try{
      let courses = await Course.find({});
      courses = multipeMongooseToObject(courses);
      res.render('home', {courses});
    }catch(err){
      next(err);
    }

   
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
