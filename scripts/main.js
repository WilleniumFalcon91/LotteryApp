function firstNumberSet() {
    var nums = {};
    
    while (Object.keys(nums).length < 5) {
      var rando = randomFirstNumber();
      nums[rando] = true;
    } 
    console.log(Object.keys(nums));
    
}

function secondNumberSet() {
    var nums = {};
    
    while (Object.keys(nums).length < 2) {
      var rando = randomSecondNumber();
      nums[rando] = true;
    } 
    console.log(Object.keys(nums));
}



function randomFirstNumber(){
  var result = (Math.floor((Math.random() * 69) + 1));
  return result;
}

function randomSecondNumber(){
  var result = (Math.floor((Math.random() * 26) + 1));
  return result;
}

firstNumberSet();
secondNumberSet();
