var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
  username: 'a5336985-ebc5-4640-8612-af24c3e6fb43',
  password: '5ssJ1YCFo4xA',
  version_date: '2017-09-21'
});

var params = {
  'tone_input': require('tone.json'),
  'content_type': 'application/json'
};


tone_analyzer.tone(params, function(error, response) {
  if (error)
    console.log('error:', error);
  else
    console.log(JSON.stringify(response, null, 2));
  }
);