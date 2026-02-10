const express = require('express');
const path = require('path');

const app = express();

// ===== CONFIGURACIONES =====
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ===== MIDDLEWARES =====
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// ===== RUTAS =====
app.use('/', require('./routes/index.routes'));


// ===== SERVER =====
app.listen(app.get('port'), () => {
  console.log('Servidor en http://localhost:' + app.get('port'));
});
