const mongoose = require('mongoose')
const URI = 'mongodb+srv://<usuario>:<clave>@instaya5.fqsqwis.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(URI)
.then(()=> { console.log('DB connected')})
.catch(()=> { console.log('DB connected')})

module.exports = mongoose
