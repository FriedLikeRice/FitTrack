const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const userRoutes = require('./controllers/api/userRoutes');
const workoutRoutes = require('./controllers/api/workoutRoutes');
const supplementRoutes = require('./controllers/api/supplementRoutes');

const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'SuperSecretSecret', // Change to a long, randomly generated string
  cookie: { 
    httpOnly: true,
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

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// routes files
app.use(routes);
app.use('/api/user', userRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/supplements', supplementRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});

sequelize.authenticate()
  .then(() => console.log('Database connected.'))
  .catch(err => console.error('Unable to connect to the database:', err));