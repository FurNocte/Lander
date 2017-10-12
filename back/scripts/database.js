var db = require('diskdb'),
    commandLineArgs = require('command-line-args');

const optionDefinitions = [
    { name: 'create', alias: 'c', type: Boolean },
    { name: 'collection', alias: 'C', type: String}
]
const options = commandLineArgs(optionDefinitions)

db.connect('../database/', ['tools']);

if (options.create) {
    if (options.collection == 'tools') {
    }
}
