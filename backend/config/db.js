const mongoose = require('mongoose');

// database connection with mongoose
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB Connected');
    } catch (error) {
        console.error('DB connection failure');
    }
};

module.exports = connectDB;