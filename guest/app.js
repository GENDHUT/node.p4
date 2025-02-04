const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Set view engine dan path views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const guestBookRoutes = require('./routes/guestBookRoutes');
const roomRoutes = require('./routes/roomRoutes');

app.use('/guestbook', guestBookRoutes);
app.use('/room', roomRoutes);

app.get('/', (req, res) => {
  res.redirect('/guestbook');
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
