const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const userRoutes = require('./controllers/userRoutes');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'SuperSecretSecret', // Change to a long, randomly generated string
  cookie: { 
    maxAge: 3600000, // Example: set the session cookie to expire after 1 hour (adjust as needed)
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(routes);
app.use('/api/users', userRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
