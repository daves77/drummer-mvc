import express from 'express';

import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';

import drummerRouter from './routers/drummerRouter.js';
import reservationRouter from './routers/reservationRouter.js';

import DrummerController from './controllers/drummers.mjs';
import ReservationController from './controllers/reservations.mjs';

import db from './models/index.mjs';

// Initialise Express instance
const app = express();
// Set the Express view engine to expect EJS templates
app.set('view engine', 'ejs');
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind Express middleware to parse request bodies for POST requests
app.use(express.urlencoded({ extended: false }));
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'));

const drummerController = new DrummerController(db);
const reservationController = new ReservationController(db);

app.use('/drummer', drummerRouter(drummerController));
app.use('/reservation', reservationRouter(reservationController));

// Set Express to listen on the given port
const PORT = process.env.PORT || 3004;
app.listen(PORT);
