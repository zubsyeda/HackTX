// PageOne.js
import React, { useState } from "react";
import Sentiment from 'sentiment';
//import TableauReport from 'tableau-react';

function getSentiments() {
  file = "twcs.csv"
  var array = file.split("\n")
  var scores = [];
  var headers;
  headers = lines[0].split(",");
  for (var i = 1; i < array.length; i++) {
    if (array[i][2] == FALSE) {
      var tweet = array[i][4].substring(0,array[i][4].indexOf(" "));
      var Sentiment = require('sentiment');
      var sentiment = new Sentiment();
      var score = sentiment.analyze(tweet);
      scores.push(score);
    }
  }
};

function PageOne() {
  return (
    <div>
      <h2>Ask Spectrum</h2>
      {/* Add content for Page One */}
    </div>
  );
}

export default PageOne;