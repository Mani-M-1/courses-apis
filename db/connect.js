const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    }
    catch(err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;