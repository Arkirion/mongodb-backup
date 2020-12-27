const cron = require('node-cron')
const exec = require("child_process").exec;

// Node-cron parameters
const hour = '01';
const minutes = '11';

// Mongo parameters
const uri = 'mongodb://localhost:27017/boowlk';
const db = 'boowlk';
const out = __dirname;

cron.schedule(`${hour} ${minutes} * * *`, () => {
  // Command for mongodb dump process
  const cmd =
    `mongodump 
      --uri ${uri}
      --db ${db} 
      --out ${out} 
      --gzip`; 

  console.log(cmd);
  console.log("DB backup started ... ");
  exec(cmd, function (error, stdout, stderr) {
    console.log(stderr);
    console.log('DB backup finished ... ')
    //once successful or error 
  });
});