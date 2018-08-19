var options = [
  'a) pid',
  'b) title',
  'c) arch',
  'd) platform',
  'e) env'
];

exports.showOptions = () => {
  options.forEach(element => {
    console.info(element);
  });
}