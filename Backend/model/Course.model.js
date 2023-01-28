const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    image:String,
    author_name:String,
    course_name:String,
    description:String,
    short_description:String,
    price:Number
});

const courseModel = mongoose.model('course', courseSchema);
module.exports = { courseModel };