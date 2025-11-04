const mongoose = require('mongoose');

const connectDatabase = () => {
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) {
        console.error('ERROR: MONGO_URI environment variable is not defined');
        process.exit(1);
    }

    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((error) => {
            console.error("Database Connection Error:", error.message);
            process.exit(1);
        });
}

module.exports = connectDatabase;