// PageOne.js
import React, { useState, useEffect } from "react";
import Sentiment from 'sentiment';
import tableau from 'tableau-api';
//import TableauReport from 'tableau-react';

function getSentiments() { // makes array of sentimental analysis scores of tweets
  file = "twcs.csv"
  var array = file.split("\n")
  var scores = [];
  var headers;
  headers = lines[0].split(",");
  for (var i = 1; i < array.length; i++) {
    if (array[i][1] == "Ask_Spectrum") {
      var tweet = array[i][4].substring(0,array[i][4].indexOf(" "));
      var Sentiment = require('sentiment');
      var sentiment = new Sentiment();
      var score = sentiment.analyze(tweet);
      scores.push(score);
    }
  }
  return scores;
};


// const TableauLineGraph = () => {
//   useEffect(() => {
//     const containerDiv = document.getElementById('tableauViz'); // Make sure you have a div with this id in your component's render method.
//     const url = 'URL_TO_YOUR_TABLEAU_WORKBOOK'; // Replace with the URL to your Tableau workbook.

//     const options = {
//       hideTabs: true,
//       width: '100%',
//       height: '500px', // Set the height as per your design.
//     };

//     const viz = new tableau.Viz(containerDiv, url, options);
//   }, []);

//   return (
//     <div id="tableauViz"></div>
//   );
// };


function PageOne() {
  return (
    <div>
      <h2>Ask Spectrum</h2>
      {/* <div className="App">
      <TableauLineGraph />
    </div> */}
    </div>
  );
}

export default PageOne;