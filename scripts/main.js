function firstNumberSet() {
    var nums = {};
    
    while (Object.keys(nums).length < 5) {
      var rando = randomFirstNumber();
      nums[rando] = true;
    } 
    return Object.keys(nums);
}

function secondNumberSet() {
    var nums = {};
    
    while (Object.keys(nums).length < 2) {
      var rando = randomSecondNumber();
      nums[rando] = true;
    } 
    return Object.keys(nums);
}

function randomFirstNumber(){
  var result = (Math.floor((Math.random() * 69) + 1));
  return result;
}

function randomSecondNumber(){
  var result = (Math.floor((Math.random() * 26) + 1));
  return result;
}


function buildDiv () {
    var displayNumbers = document.querySelector('[data-luckyNumbers="target"]');
    var nums = addNumbers();
    nums.forEach(function (num) {
        var element = document.createElement('h2');
        element.setAttribute('class', 'number');
        element.textContent = num;
        displayNumbers.appendChild(element);
    })
}


function addListener() {
    var pushButton = document.querySelector('[data-button="trigger"]');
    pushButton.addEventListener('click', function (event) {
        event.preventDefault;
        buildDiv();
    })
};


function addNumbers() {
    var allTheNumbers = [];
    allTheNumbers.push(firstNumberSet());
    allTheNumbers.push(secondNumberSet());
    return allTheNumbers;
};

function doTheThing () {
    addListener();
}

doTheThing();
