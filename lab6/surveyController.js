const fs = require('fs');
const path = require('path');

const DATA_FILE_PATH = path.join(__dirname, 'data', 'surveyResults.json');

// Helper function to read survey data from the file
function readSurveyData() {
    if (!fs.existsSync(DATA_FILE_PATH)) {
        return { responses: [] };
    }
    return JSON.parse(fs.readFileSync(DATA_FILE_PATH, 'utf8'));
}

// Helper function to write survey data to the file
function writeSurveyData(data) {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');
}

const surveyController = {
    surveyForm: (req, res) => {
        res.sendFile(path.join(__dirname, 'views', 'index.html'));
    },
    submitSurvey: (req, res) => {
        const newResponse = req.body;
        const data = readSurveyData();
        data.responses.push(newResponse);
        writeSurveyData(data);

        res.redirect('/analysis');  // Redirect to the results page after submission
    },
    showResults: (req, res) => {
        const data = readSurveyData();
        res.render('showResults', { responses: data.responses });
    }
};

module.exports = surveyController;
