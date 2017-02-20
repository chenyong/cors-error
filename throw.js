
var button = document.getElementById('button')
button.addEventListener('click', function(event) {
  errorToThrow(); // Error!
})

throw "Outside"
