function Insertion()
{
    c_delay=0;
    

    for(var j=0;j<no_of_bar;j++)
    {
        div_update(bar[j],arr[j],"yellow");//Color update

        var key= arr[j];
        var i=j-1;
        while(i>=0)
        {
            div_update(bar[i],arr[i],"blue");//Color update
            div_update(bar[i+1],arr[i+1],"blue");//Color update
            if(arr[i]>key)
        {
            div_update(bar[i],arr[i],"red");//Color update
            div_update(bar[i+1],arr[i+1],"red");//Color update
            
            var temp=arr[i+1];
            arr[i+1]=arr[i];
            arr[i]=temp;
            div_update(bar[i],arr[i],"red");//Height update
            div_update(bar[i+1],arr[i+1],"red");//Height update
        }
        else{

            div_update(bar[i],arr[i],"pink");//Height update
            div_update(bar[i+1],arr[i+1],"pink");//Height update div_update(bar[i],arr[i],"red");//Height update
   //div_update(bar[i+1],arr[i+1],"pink");//Height update
        }
            
    
        div_update(bar[i],arr[i],"yellow");//Height update
        div_update(bar[i+1],arr[i+1],"yellow")
            /* if(i==(j-1))
            {
                div_update(bar[i+1],arr[i+1],"yellow");//Color update
            }
            else
            {
                div_update(bar[i+1],arr[i+1],"blue");//Color update
            } */
            i-=1;
        }
        //arr[i+1]=key;

        for(var t=0;t<=j;t++)
        {
            div_update(bar[t],arr[t],"green");//Color update
        } 
    }
//    div_update(bar[j-1],arr[j-1],"green");//Color update

   
}
