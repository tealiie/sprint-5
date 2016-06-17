for (var i = "#" ; i < "########"; i += "#") {
  console.log(i);
}

/* It works but not the best code :/ couldn't figure out how to curb the length to only 8 # */



var numbers = i;
for (var i = 1; i < 101; i ++ ) {
  if ((i % 5) === 0)
  console.log("Buzz");
  else if ((i % 3) === 0)
  console.log ("Fizz");
  else if ((i % 3) === 0 && (i % 5) === 0)
  console.log("FizzBuzz");
  else 
  console.log (i);
}

/* The numbers were repeated twice so it took me a couple minutes to figure out that I had to put else console.log(i) because it wasn't going to automatically log the numbers if they were not divisable. */



/* I don't get how to do question 3, the chess board, I googled the help forums but I'm still confused. */