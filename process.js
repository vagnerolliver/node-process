// Object.keys(global).forEach(value => {
//   console.info(value);
// });

const options = process.argv.slice(2);

if (options.length < 1) {
  return;
}

switch (options[0]) {
  case 'a':
      console.log('pid: ' + process.pid);
      break;

  case 'b':
      console.log('title: ' + process.title);
      break;
}
