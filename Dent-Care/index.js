import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';

import envConfig from './config/dotenv.js';
import db from './config/db.js';
import router from './routes/index.js';
import flashMsg from './middleware/flashMsg.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// View + Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cookieParser())

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true
}));

// ✅ Flash AFTER session
app.use(flash());

// ✅ Custom middleware AFTER flash
app.use(flashMsg);

// Routes
app.use(router);

// Server
app.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting the server:', error);
    } else {
        console.log(`http://localhost:${PORT}`);
    }
});