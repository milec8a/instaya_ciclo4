const mongoose = require('mongoose')
const URI = 'mongodb+srv://admin_instaya:instaya5@instaya5.fqsqwis.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URI)
.then(()=> { console.log('DB connected')})
.catch(()=> { console.log('DB connected')})

module.exports = mongoose