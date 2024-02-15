// es5
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //es2015
  const double = arr => arr.map(val => val *2);

  //es5
    function squareAndFindEvens(numbers) {
        var squares = numbers.map(function(num) {
        return num ** 2;
        });
        var evens = squares.filter(function(square) {
        return square % 2 === 0;
        });
        return evens;
    }

    //es2015
    const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);