/*function findShort(string) {
  var array = string.split(' ');
  var shortest = null;
  
  for (var i=0, l=array.length; i<l; ++i)
  {
    if (shortest == null || array[i].length < shortest)
      shortest = array[i].length;
  }
  
  return shortest;
}*/

function findShort(s){
var arr=s.split(" ");
var ss=arr[0];
for (var i=0;i<arr.length;i++){
          if(arr[i].length<ss.length)
          {ss=arr[i];}
          }
  return ss.length;        
}