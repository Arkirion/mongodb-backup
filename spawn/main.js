const cron = require('node-cron'), spawn = require('child_process').spawn;
const fs = require('fs-extra')

const hour = '04';
const minutes = '01';

const uri = 'mongodb://localhost:27017/boowlk';
const db = 'boowlk';
const outPath = __dirname;
const source = `${outPath}/${db}`;
const destiny = 'C:/Users/VIP-ES6/Google Drive/mongoBU'; // windows dirname

cron.schedule(`${minutes} ${hour} * * *`, () => {
  const backupProcess = spawn('mongodump', [
      `--uri=${uri}`,
      `--db=${db}`,
      `--out=${outPath}`,
      '--gzip'
    ]);

   backupProcess.on('exit', async (code, signal) => {
      if(code) 
          console.log('Backup process exited with code ', code);
      else if (signal)
          console.error('Backup process was killed with singal ', signal);
      else 
          console.log('Successfully backedup the database')
          fs.rmdirSync(destiny, { recursive: true });
          await moveFile(source, destiny);
  });




});

const moveFile = async (from, to) => {
  fs.move(from, to, function (err) {
    if (err) return console.error(err)
    console.log("success!")
   })
}

