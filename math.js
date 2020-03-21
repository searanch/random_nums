

var min = 3.75;
var max = 4.25;
console.log((Math.random() * (max -min)) + min); 

//trying for loop

var matchRatings = [];

for (var i = 0; i < 20; i++) {
  //Add the numbers to the array
  matchRatings.push((Math.random() * (max -min)) + min);
 }
 //  Check your numbers.
 console.log(matchRatings);

 //Create our first trace
var trace1 = {
  
  y: matchRatings,
  mode:"markers",
  type: "scatter"
};

var trace2 = {
  
  y: matchRatings,
  mode:"markers",
  type: "scatter"
};

console.log(trace2)





var data = [trace1 , trace2];

Plotly.newPlot("plot", data);


  // var powerBallNumbers = [];
//   var min = 3.75;
//   var max = 4.25;


  // for (var i = 3.75; i < 20; i++) {
  //   //Add the numbers to the array
  //   powerBallNumbers.push(Math.floor(((Math.random() * (4.25 -3.75)) + 3.75))); 

  //  }
  //  //  Check your numbers.
  //  console.log(powerBallNumbers);
// function getRandomArbitrary(x,y) {
//   result = Math.random() * (x-y) + x;}
  

//    console.log(result)

//  function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   };

