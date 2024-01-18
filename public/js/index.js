const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path'); 
const authRoutes = require('../../src/routes/authRoutes'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(session({ secret: '_secret_key', resave: false, saveUninitialized: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
