const router = require('express').Router();
const Course = require('../Models/Course');

//router for getting all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

//router for adding a course
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    try {
        const course = new Course({
            title,
            description
        });
        await course.save();
        res.status(200).json(course);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
