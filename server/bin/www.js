// Express setup
import http from 'http';
import app from '../config/app';
import db from '../models';
import Sequelize from 'sequelize'

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

// setup http
const server = http.createServer(app);
server.listen(port, console.log('Server running currently on', port));

//db.sequelize.sync().then(() => {
  //server.listen(port);
//});
