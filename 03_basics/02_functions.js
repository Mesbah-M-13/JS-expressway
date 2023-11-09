let result=0;
function calculateCartPrice(...num) {
  for (let i = 0;i<num.length-1;i++) {
    result += i;
    console.log(result);
  }
}
console.log(calculateCartPrice(4, 34, 4, 12));
