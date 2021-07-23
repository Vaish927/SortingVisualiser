 function Quick()
{
    c_delay=0;

    quick_sort(0,no_of_bar-1);

   
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = arr[start] ;
    div_update(bar[start],arr[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            
            if (arr[ j ] < piv)
            {
                div_update(bar[j],arr[j],"yellow");//Color update

                div_update(bar[i],arr[i],"red");//Color update
                div_update(bar[j],arr[j],"red");//Color update

                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

                div_update(bar[i],arr[i],"red");//Height update
                div_update(bar[j],arr[j],"red");//Height update

                div_update(bar[i],arr[i],"blue");//Height update
                div_update(bar[j],arr[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(bar[start],arr[start],"red");//Color update
    div_update(bar[i-1],arr[i-1],"red");//Color update
    
    var temp=arr[start];
    arr[start]=arr[i-1];
    arr[i-1]=temp;

    div_update(bar[start],arr[start],"red");//Height update
    div_update(bar[i-1],arr[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(bar[t],arr[t],"green");//Color update
    }

    return i-1;
}

function quick_sort (start, end )
{
    if( start < end )
    {
        
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
}