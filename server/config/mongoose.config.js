const mongoose = require('mongoose')

const database = 'aywaahCafe';

mongoose.set('strictQuery', true);
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established connection to ${database} Database`))
.catch((err) => console.log('An error occured connecting to DB', err))