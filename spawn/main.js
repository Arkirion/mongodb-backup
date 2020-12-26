const cron = require('node-cron'), spawn = require('child_process').spawn;


const hour = '01';
const minutes = '11';

let dbBackupTask = cron.schedule(`${hour} ${minutes} * * *`, () => {
  let backupProcess = spawn('mongodump', [
      '--uri=mongodb://localhost:27017/boowlk',
      '--db=boowlk',
      '--out='+ __dirname,
      '--gzip'
    ]);

  backupProcess.on('exit', (code, signal) => {
      if(code) 
          console.log('Backup process exited with code ', code);
      else if (signal)
          console.error('Backup process was killed with singal ', signal);
      else 
          console.log('Successfully backedup the database')
  });

});