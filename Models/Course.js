const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Course', CourseSchema);
