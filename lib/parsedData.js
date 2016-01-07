'use strict'
const fs = require('fs')
const _ = require('lodash')

module.exports = (filename) => {
  let dataset = fs.readFileSync(filename)
                  .toString()
                  .split('\r\n')
                  .map(row => row.split(','))

  let columnHeader = _.first(dataset)
  let columnData = _.rest(dataset)

  var newDataset = []
  columnData.forEach(function(record) {
    if (_.last(record) !== "1" || _.last(columnHeader) !== "IS_TRAFFIC") {
      newDataset.push(_.zipObject(columnHeader, record))
    }
  })
  return newDataset
};
