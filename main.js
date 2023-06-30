import "bootswatch/dist/flatly/bootstrap.min.css";
import "./style.css";
import Scatterplot from "deepscatter";
// this file is where we configure details about our tile displays (colors, positions, etc.)
import {tileConfig} from './tileconfig.js';
// import { select } from "d3-selection";


let tilesSource = '/tiles';
let maxPoints = 2000000;
let zoomBalance = 0.7;
let pointSize = 2;
let backgroundColor = "#FFFFFF";
let dotsLayout = 'geographic';
let colorScheme = tileConfig.colors.natural.encoding;
let xPosition = tileConfig.positions[dotsLayout].encoding.x;
let yPosition = tileConfig.positions[dotsLayout].encoding.y;

document.getElementById("tiles-source").value = tilesSource;
document.getElementById("max-points").value = maxPoints;
document.getElementById("zoom-balance").value = zoomBalance;
document.getElementById("point-size").value = pointSize;
document.getElementById("background-color").value = backgroundColor;

// add each key in tileConfig.colors to the color-scheme dropdown
for (const [key, value] of Object.entries(tileConfig.colors)) {
  var colorOption = document.createElement("option");
  colorOption.text = value.title;
  colorOption.value = key;
  document.getElementById("color-scheme").appendChild(colorOption);
}

// add each key in tileConfig.positions to the dots-layout dropdown
for (const [key, value] of Object.entries(tileConfig.positions)) {
  var positionOption = document.createElement("option");
  positionOption.text = value.title;
  positionOption.value = key;
  document.getElementById("dots-layout").appendChild(positionOption);
}

document.getElementById("update-source-button").addEventListener("click", function () {
  // set tileSource equal to the element with id 'tiles-source'
  tilesSource = document.getElementById("tiles-source").value;
  prefs.source_url = tilesSource;
  // remove everything from inside the element with id #deepscatter
  document.querySelector('#deepscatter').innerHTML = ``;
  const scatterplot = new Scatterplot("#deepscatter");
  scatterplot.plotAPI(prefs);
});

document.getElementById("max-points").addEventListener("input", function () {
  maxPoints = parseInt(this.value);
  scatterplot.plotAPI({max_points: maxPoints})
  // Call your function here or do something with the updated value
});

document.getElementById("zoom-balance").addEventListener("input", function () {
  zoomBalance = parseFloat(this.value);
  scatterplot.plotAPI({zoom_balance: zoomBalance})
  // Call your function here or do something with the updated value
});

document.getElementById("point-size").addEventListener("input", function () {
  pointSize = parseInt(this.value);
  scatterplot.plotAPI({point_size: pointSize})
  // Call your function here or do something with the updated value
});

document.getElementById("update-background-color-button").addEventListener("click", function () {
  // Call your function here or do something when the button is clicked
  backgroundColor = document.getElementById("background-color").value;
  prefs.background_color = backgroundColor;
  document.querySelector('#deepscatter').innerHTML = ``;
  const scatterplot = new Scatterplot("#deepscatter");
  scatterplot.plotAPI(prefs);
});

document.getElementById("color-scheme").addEventListener("change", function () {
  colorScheme = this.value;
  console.log(colorScheme);
  scatterplot.plotAPI({encoding: {color: tileConfig.colors[colorScheme].encoding}});
  // Call your function here or do something with the updated value
});

document.getElementById("dots-layout").addEventListener("change", function () {
  dotsLayout = this.value;
  // Call your function here or do something with the updated value
  scatterplot.plotAPI({encoding: tileConfig.positions[dotsLayout].encoding});
});
const prefs = {
  source_url: tilesSource, // the output of the quadfeather tiling engine. Note, this could be local, or something that you host somewhere like an s3 bucket
  max_points: maxPoints, // a full cap.
  alpha: 100, // Target saturation for the full page.
  zoom_balance: zoomBalance, // Rate at which points increase size. https://observablehq.com/@bmschmidt/zoom-strategies-for-huge-scatterplots-with-three-js
  point_size: pointSize, // Default point size before application of size scaling
  background_color: backgroundColor,
  tooltip_opacity: 1,

  // encoding API based roughly on Vega Lite: https://vega.github.io/vega-lite/docs/encoding.html
  encoding: {
    x: xPosition,
    y: yPosition,
    color: colorScheme,
  },
};





const scatterplot = new Scatterplot("#deepscatter");
scatterplot.plotAPI(prefs);
scatterplot.tooltip_html = (datum) => {
  var img_link = `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/${datum.lon},${datum.lat},15,0/256x256?access_token=pk.eyJ1IjoicGxvdGxpbmUiLCJhIjoiY2xqajRvYmZ2MDVhMzNlbzM5Z3A0N2lhYiJ9.aiP35po9eHbKfqMWVnuD4A`
  // set div tooltip opacity to 1

  // select('#tooltip').style('opacity1);
  return `<img src="${img_link}"></img>`;
}


// setupCounter(document.querySelector('#counter'))
