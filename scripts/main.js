function firstNumberSet() {
    var result = [];
    for (var i = 0; i < 5; i++) {
        result.push(Math.floor((Math.random() * 69) + 1));
    }
    return result;
}

firstNumberSet();