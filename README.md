# Mongodb backup options

This repository has been created to archieve methods of backups
in mongodb with Javascript

I am also using cron library https://www.npmjs.com/package/cron
in order to create automated backups

My real objective is have some off personal apps in my computer and
save this data on google drive, I am folling this article
http://www.3braintechnologies.com/scheduled-database-backup-and-upload-to-google-drive-using-node-js/

### Used with

  1. MongoDB 4.4 

  2. MongoDB database-tools
    * Note: in 4.4 mongodump and mongorestore has become its own proyect so you have to download it
      https://docs.mongodb.com/database-tools/installation/installation/

  3. Node 14.15.1
        
  4. Windows 10
    * Note : you have to be careful with env variables in windows 10, add mongo and database-tools to the PATH
      https://www.architectryan.com/2018/08/31/how-to-change-environment-variables-on-windows-10/

      - example for Mongo
      `C:\Program Files\MongoDB\Server\4.4\bin`
      - example for database-tools
      `C:\Program Files\MongoDB\mongodb-database-tools-windows-x86_64-100.2.1\bin` 


## INDEX

  1. [Without library, just exec](./exec/main.js)
    * configure parameters
    * you could use node-cron here if you want
    * node main.js

  2. [Using node-cron,fs-extra(to move the backup) and spawn](./spawn/main.js)
    * npm install
    * configure parameters
    * `node main.js` to run



