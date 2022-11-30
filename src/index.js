const express = require("express");
const app = express();
const path = require("path");
const {mongoose} = require('./database')

//setting
app.set('port', process.env.PORT || 3000 )

//middlewares
app.use(express.json())

//routes
app.use('/api/task', require('./routes/taskRoutes'))

// static files
app.use(express.static(path.join(__dirname, 'public')) )

// starting the server
app.listen(app.get('port'),  () => {
  console.log(`Servidor en puerto ${app.get('port')}`);
});
