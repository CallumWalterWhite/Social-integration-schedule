const cron = require('node-cron');
cron.schedule('* * * * * 2', function() {
  console.log('running a task every 2 seconds');
});
