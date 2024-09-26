const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// Routes
const contactRoute = require('./Routes/contactRoute');
const registerRoute = require('./Routes/registerRoute');
const userLoginRoute = require('./Routes/userLoginRoute');
const userLogoutRoute = require('./Routes/userLogoutRoute');
const notificationRoute = require('./Routes/notificationRoute');
const currentJobRoute = require('./Routes/currentJobRoute');
const userProfileRoute = require('./Routes/userProfileRoute');
const userFeedbackRoute = require('./Routes/userFeedbackRoute');
const userChangePassRouters = require('./Routes/userChangePassRouters');
const userResetEmailRoute = require('./Routes/userResetEmailRoute');
const noticeGetController = require('./Routes/noticeGetRoute');

// Object for express
const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:4200' // Replace with your actual frontend URL
}));

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Port No. For Running API
const PORT = process.env.PORT || 3100;

// Serve static files from the 'Uploads' directory
app.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));

// Set 'views' directory for any views
app.set('views', path.join(__dirname, 'Views'));
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route to render index.ejs
app.get("/", (req, res) => {
    res.render('index');
});

// Calling Routing APIs
app.use('/api/post', contactRoute);
app.use('/api/post', registerRoute);
app.use('/api/post', userLoginRoute);
app.use('/api/post', userLogoutRoute);
app.use('/api/get', notificationRoute);
app.use('/api/get', currentJobRoute);
app.use('/api/get', userProfileRoute);
app.use('/api/post', userFeedbackRoute);
app.use('/api/post', userChangePassRouters);
app.use('/api/post', userResetEmailRoute);
app.use('/api/get', noticeGetController);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Listening to the port
app.listen(PORT, () => {
    console.log('Project :- Kanker Recruitment Portal');
    console.log(`\x1b[31mBackend API Is Running On => http://localhost:${PORT}\x1b[0m`);
    console.log('Developed By. Homesh Kumar');
});
