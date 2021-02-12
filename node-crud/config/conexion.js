let mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/crud', {useNewUrlParser: true, useUnifiedTopology: true});
//mongodb+srv://andresg_user:<password>@cluster1.94nu3.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://andresg_user:123@cluster0.94nu3.mongodb.net/dbtestandresg?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;
