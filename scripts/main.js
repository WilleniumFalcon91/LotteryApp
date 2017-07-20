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
    
    while (Object.keys(nums).length < 1) {
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


function buildDiv1 () {
    var displayNumbers = $('[data-luckyNumbers="target"]');
    var nums = firstNumberSet();
    var $i = 0;
    nums.forEach(function (num) {
        var $element = $('h2')[$i];
        // element.setAttribute('class', 'number');
        $element.textContent = num;
        $i++;
        // displayNumbers.appendChild(element);
    })
}

function buildDiv2 () {
    var $displayNumbers = $('[data-powerball="target"]');
    var $nums = secondNumberSet();
    var $i = 0;
    nums.forEach(function (num) {
        var $element = $('[data-ballz2="target"]')[$i];
        // element.setAttribute('class', 'number');
        $element.textContent = num;
        $i++;
        // displayNumbers.appendChild(element);
    })
}


function addListener() {
    var $pushButton = $('[data-button="trigger"]');
    $pushButton.addEventListener('click', function (event) {
        event.preventDefault;
        buildDiv1();
        buildDiv2();
    })
};



// function addNumbers() {
//     var allTheNumbers = [];
//     allTheNumbers = [];
//     allTheNumbers.push(firstNumberSet());
//     allTheNumbers.push(secondNumberSet());
//     return allTheNumbers;
// };

// function resetNumbers(){
//     var displayNumbers = document.querySelector('[data-luckyNumbers="target"]');
//     var nums = addNumbers();
//     nums.forEach(function (num) {
//         var element = document.removeElement('h2');
//         element.setAttribute('class', 'number');
//         element.textContent = num;
//         displayNumbers.removeChild(element);
//     });
// }


function doTheThing () {
    addListener();
}

doTheThing();
