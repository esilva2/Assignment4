
function changeSize(){
    var size= document.getElementById("size").style.fontSize= "24pt";
    return size;
}

function changeStyle(){
var style;
    if(document.getElementById("fancy").checked){
       style= document.getElementById("size").style.fontWeight = "bold";
       style = document.getElementById("size").style.color = "blue";
       style = document.getElementById("size").style.textDecoration = "underline";
    }
    else if(document.getElementById("boring").checked){
        style=document.getElementById("size").style.fontWeight = "normal";
        style = document.getElementById("size").style.color = "black";
       style = document.getElementById("size").style.textDecoration = "none";
    }
    return style;
}

//var array;

function upperCase(){

    var str = document.getElementById("size").value;
     var parts = str.split(".");
   var newStr = parts.join("-Moo");
    //str = str.valueOf().split(".").join("-Moo");
  
    //str = parts.join("-Moo");
      // var upper =  document.getElementById("size").style.textTransform="uppercase";
//     var upper = document.getElementsByName("name").style.upperCase;
//    return upper;
    return newStr;

}