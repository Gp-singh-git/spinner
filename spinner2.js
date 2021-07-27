const spinner = function() {
  let arr = ['|', '/', '-', '\\'];
  for (let q = 1; q < 5; q++) {
    setTimeout(() => {
      process.stdout.write(`\r${arr[q - 1]}`);
    },(q * 200) + 100);

  }
};
const rot = function(rotations) {

  let y = 0;
  for (let i = 0; i < rotations; i++) {
  
    setTimeout(()=> {
      spinner();
    }, y);
    y += 1000;
  }
};

rot(6);



// setTimeout(()=> console.log("\r\n"),3000);