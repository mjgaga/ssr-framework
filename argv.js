const yargs = require('yargs')
const  {hideBin} = require( 'yargs/helpers')
let arg = yargs(hideBin(process.argv)).option('port', {
    demand: true,
    default: +process.env.port || 3000,
    type: 'number'
}).option('node-babel', {
    demand: true,
    default: process.env.NODE_ENV !== "production",
    type: 'boolean'
});
const argv =arg.help('h').argv;

const {port, nodeBabel} = argv

module.exports = {port, nodeBabel}