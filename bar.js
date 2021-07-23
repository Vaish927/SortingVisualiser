

var arr_size=document.querySelector("#arr_sz");
arr_size.addEventListener("input",arr_gen);

var no_of_bar=arr_size.value;
var arr=[];
var bar=[];
 var cont=document.getElementById("bars");
 /*cont.style.flexDirection="row";*/

cmd=document.getElementById("new_array")
cmd.addEventListener("click",arr_gen);
arr_size.addEventListener("input",sizeChange);

function arr_gen()
{
    cont.innerHTML="";

    for(var i=0;i<no_of_bar;i++)
    {
        arr[i]=Math.floor(Math.random()*100)+1;
        bar[i]=document.createElement("div");
        cont.appendChild(bar[i]);
        bar[i].style.cssText="Text:arr[i];margin:1px;background-color:violet; width:" +(50000/no_of_bar)+"px;  height:"+arr[i]*5+"px";
        
    }
}
window.onload(arr_gen());

function sizeChange()
{ 
  no_of_bar=arr_size.value;
  arr_gen();
}

//document.getElementById("bubblebtn").onclick=Bubble;
//sort.addEventListener("click",Bubble);