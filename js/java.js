var CapStartEnd = function(phrase1) {
  var firstChar = phrase1.charAt(0).toUpperCase();
  var lastChar = phrase1.charAt(phrase1.length-1).toUpperCase();
  var sliced = phrase1.slice(1,phrase1.length-1)

  alert(firstChar + sliced + lastChar)
};

var ReverseStartEnd = function(phrase1) {
  var firstChar = phrase1.charAt(0).toUpperCase();
  var lastChar = phrase1.charAt(phrase1.length-1).toUpperCase();
  var sliced = phrase1.slice(1,phrase1.length-1)

  alert(lastChar + sliced + firstChar)
};

var idontEven = function(phrase1) {
  var firstChar = phrase1.charAt(0).toUpperCase();
  var lastChar = phrase1.charAt(phrase1.length-1).toUpperCase();
  var sliced = phrase1.slice(1,phrase1.length-1);
  var mid = phrase1.charAt(Math.floor(phrase1.length/2)-1);

  alert(reverseSting(mid + lastChar + sliced + firstChar));
};

var phrase1 = prompt("Enter your favorite phrase");
idontEven(phrase1);
