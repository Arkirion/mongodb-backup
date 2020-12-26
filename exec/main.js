const exec = require("child_process").exec;

// parameters
const uri = 'mongodb://localhost:27017/boowlk';
const db = 'boowlk';
const out = __dirname;

const cmd =
`mongodump --uri ${uri} --db ${db} --out ${out} --gzip`; // Command for mongodb dump process

console.log("DB backup started ... ");
console.log(cmd);
exec(cmd, function(error, stdout, stderr) {
    console.log(stderr);
    console.log('DB backup finished ... ')
   //once successful or error 
});