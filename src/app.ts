import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import i18n from './i18n';
import routes from './routes';
import { requestLogger } from './middleware';

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Chuyển thành true nếu dùng HTTPS
}));

// i18n
app.use(i18n.init);

// Static files
app.use(express.static(path.join(__dirname, './public')));

// View engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', routes);

// Custom middleware
app.use(requestLogger);

export default app;
