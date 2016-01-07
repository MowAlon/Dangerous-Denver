'use strict'
const _ = require('lodash')

module.exports = (dataset, field) => {
  var rankedData = {}
  dataset.forEach(function(record) {
    if (record[field]) {
      rankedData[record[field]] = rankedData[record[field]] + 1 || 1
    }
  })

  return _(rankedData)
          .pairs()
          .sortBy(function(record){return record[1]})
          .reverse()
          // .take(5)
          .value()
}
