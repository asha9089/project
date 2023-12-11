function myFunction() {
  var x = document.getElementById("screen1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
 // get screens, if display is none block what appears
function functionn(){
  var x = document.getElementById("screen2"); 
  if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}

 // The number to guess
 const correctNumber = 5;

 function checkRandom() {
     // Get the user's guess
     const userRandom = document.getElementById('Random').value;

     // Check if the guess is correct
     if (userRandom == correctNumber) {
         showMessage('Congratulations! You guessed it right.');
     } else if (userRandom < correctNumber) {
         showMessage('Too low, Keep trying.');
     } else {
         showMessage('Too high. keep trying.');
     }

 }

 

 function showMessage(message) {
     // Display the  message
     document.getElementById('message').textContent = message;
     
}