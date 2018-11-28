
function isNegNam(){
  var arr = [1, -1, 35, 458, -5186, 54, 5821, -5612, 581311, -542, 154852102];
  var min = Math.min.apply(null, arr);
  console.log(min);
  var max = Math.max.apply(null, arr);
  console.log(max);
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > min && arr[i] < 0 && arr[i] < max) {
      console.log(true);
    }
  
  }
}