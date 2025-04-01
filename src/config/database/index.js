const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/f8_education_dev')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((err) => console.error('Connection error:', err));
  
}
module.exports = { connect };
