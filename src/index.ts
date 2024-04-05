import express from 'express';
import path from 'path'
import config from './config'
import router from './routes/routes'

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
  res.render('pages/index');
});


app.use(router);

app.listen(config.port, () => {
  console.log(`server running on port 4000`);
});
