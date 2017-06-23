var express = require('express');

var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');

var path = require('path');
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movie_single);


// app.get('/notFound', routes.notFound);

// Listen on port 3000
app.listen(process.env.PORT || 2222,() => {
    console.log('listen port 2222')
});