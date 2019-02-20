var data = [11, 4, 41, 50, 7, 19, 8, 18, 2, 6, 43, 6, 20, 43, 2, 23, 12, 24, 31, 29];

var mean=function()
{
  window.alert("it's working");
  var i=0;
  data.forEach(function(d))
  {var i = var i + 1};
  var length = data.length;
  var theMean= i/length;
  var meanText= document.getElementbyID("mean");
  meanText.innerText= theMean;
}


  

var reducefunction=function()
{

var result = data.reduce((total, score) => total+score)/scores.length; 
document.write(result);
  
}
