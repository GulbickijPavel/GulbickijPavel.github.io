var gameImgDir="images/";
var gField=[];
function generateField(w,h){
    gField=new Array(w); 
    
  for (i=0;i<w;i++) gField[i]=new Array(h); 

  var hT="<table cellpadding='0' cellspacing='0'>"; 
  for (j=0;j<h;j++) {
   hT+="<tr>"; 
   for (i=0;i<w;i++) { 
    hT+="<td>";
    hT+="<img id='c"+i+"_"+j+"' src='"+gameImgDir+"c_null.gif' alt=' ' onclick='onCellClk("+i+","+j+")'>";
    hT+="</td>";
   }
   hT+="</tr>"; 
  }
  document.getElementById('game').innerHTML = hT+"</table>"; 
}