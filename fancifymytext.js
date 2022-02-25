
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
   str = parts.join("-Moo");
    return  document.getElementById("size").value = str;

}
