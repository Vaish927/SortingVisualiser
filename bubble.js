
function Bubble()
{
    c_delay=0;
    for(var i=0;i<no_of_bar;i++)
    {
        for(var j=0;j<no_of_bar-i-1;j++)
        {
            div_update(bar[j],arr[j],"blue");//Color update
            div_update(bar[j+1],arr[j+1], "blue")
            if(arr[j]>arr[j+1])
            {
                div_update(bar[j],arr[j], "red");//Color update
                div_update(bar[j+1],arr[j+1], "red");//Color update
                    
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

                div_update(bar[j],arr[j], "red");//Height update
                div_update(bar[j+1],arr[j+1], "red");//Height update
            }
            else{
                div_update(bar[j],arr[j], "pink");//Height update
                div_update(bar[j+1],arr[j+1], "pink")//Color updat
            }
            div_update(bar[j],arr[j], "yellow");

        }
        div_update(bar[j],arr[j], "green");//Color update
    }
    div_update(bar[0],arr[0],"green");
}


x