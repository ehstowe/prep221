var data = [11, 4, 41, 50, 7, 19, 8, 18, 2, 6, 43, 6, 20, 43, 2, 23, 12, 24, 31, 29];

var calculateMean=function()
{
  window.alert("mean is working!");
  var buttonMean= document.getElementById("meanButton");
  buttonMean.remove();
  var i=0;
  data.forEach(function(d)
  {var i = var i + 1});
  var length = data.length;
  var theMean= i/length;
  var meanText= document.getElementByID("mean");
  meanText.innerText= theMean;
}

var calculateMedian=function()
{
window.alert("median is working!");
  var buttonMedian=document.getElementById("medianButton");
  buttonMedian.remove();
  data.sort(function(a,b){return a-b});
  var length = data.length;
  var pickThis = (length+1)/2;
  var theMedian = data[pickThis];
  var medianText= document.getElementById("median");
  medianText.innerText= theMedian;  
}

var calculateMode=function()
{
  window.alert("mode is working!");
}
  


  

var reducefunction=function()
{

var result = data.reduce((total, score) => total+score)/scores.length; 
document.write(result);
  
}
