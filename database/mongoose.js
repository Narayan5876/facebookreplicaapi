const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Facebookapireplica',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
