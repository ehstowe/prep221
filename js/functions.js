var data = [11, 4, 41, 50, 7, 19, 8, 18, 2, 6, 43, 6, 20, 43, 2, 23, 12, 24, 31, 29];

var calculateMean=function()
{var data = [11, 4, 41, 50, 7, 19, 8, 18, 2, 6, 43, 6, 20, 43, 2, 23, 12, 24, 31, 29];
  var buttonMean= document.getElementById("meanButton");
  buttonMean.remove();  
  var i=0;
  data.forEach(function(d)
  {var i = i + 1});
  var i_i=parseInt(i) 
  var length = data.length;
  var i_length=parseInt(length);
  var theMean= i_i/i_length;
  var meanText= document.getElementById("mean");
  meanText.innerText= theMean;
  return theMean;
}

var calculateMedian=function()
{
  var data = [11, 4, 41, 50, 7, 19, 8, 18, 2, 6, 43, 6, 20, 43, 2, 23, 12, 24, 31, 29];
  var buttonMedian=document.getElementById("medianButton");
  buttonMedian.remove();
  data.sort(function(a,b){return a-b});
  var length = data.length;
  var i_length= parseInt(length)
  var pickThis = (i_length+1)/2;
  var i_pickThis=parseInt(pickThis)
  var theMedian = data[i_pickThis];
  var medianText= document.getElementById("median");
  medianText.innerText= theMedian;  
}

var calculateMode=function()
{
  window.alert("mode is working!");
  var buttonMode=document.getElementById("modeButton");
  buttonMode.remove();
  
}
  


  

var reducefunction=function()
{

var result = data.reduce((total, score) => total+score)/scores.length; 
document.write(result);
  
}
