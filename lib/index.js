'use strict'
const parsedData = require('./parsedData.js')
const tabulate = require('./tabulate.js')

console.time('entire process')

var trafficData = parsedData('./data/traffic-accidents.csv')
var trafficAddresses = tabulate(trafficData, "INCIDENT_ADDRESS")
var trafficNeighborhoods = tabulate(trafficData, "NEIGHBORHOOD_ID")
var crimeData = parsedData('./data/crime.csv')
var crime = tabulate(crimeData, "NEIGHBORHOOD_ID")

console.timeEnd('entire process')

console.log(trafficAddresses)
console.log(trafficNeighborhoods)
console.log(crime)
console.timeEnd('entire process')
