var delay_time=10000/(Math.floor(no_of_bar/10)*30);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.


function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style.cssText="margin:1px;background-color:"+color+"; width:" +(50000/no_of_bar)+"px;  height:"+height*5+"px";
    },c_delay+=delay_time);
}
