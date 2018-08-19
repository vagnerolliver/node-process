exports.onReadable = (callback) => {
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk) callback(chunk.toString().replace(/(\r\n|\n|\r)/gm,""));
  });
}