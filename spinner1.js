const spinner = function(x) {

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100 + x);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 + x);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 + x);

  setTimeout(() => {
  // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 700 + x);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 900 + x);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 1100 + x);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 1300 + x);

  setTimeout(() => {
  // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, 1500 + x);

};
const rot = function(rotations) {

  let y = 0;
  for (let i = 0; i < rotations; i++) {
  
    setTimeout(()=> {
      spinner(0);
    }, y);
    y += 1500;
  }
};

rot(7);



// setTimeout(()=> console.log("\r\n"),3000);