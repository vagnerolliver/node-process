const help = require('./help');
const keyboard = require('./keyboard');

keyboard.onReadable((options) => {
  console.info(options.length)
  switch (options) {
    case 'a':
        console.log('pid: ' + process.pid);
        break;
    case 'b':
        console.log('title: ' + process.title);
        break;
    case 'c':
        console.log('arch: ' + process.arch);
        break;
    case 'd':
        console.log('platform: ' + process.platform);
        break;
    case 'e':
        console.log('env: ' + process.env);
        break;
    default:
      help.showOptions();
  }
});