const express = require('express');
const bodyParser = require('body-parser');
const surveyController = require('./surveyController');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/niceSurvey', surveyController.surveyForm);
app.post('/submit-survey', surveyController.submitSurvey);
app.get('/analysis', surveyController.showResults);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
