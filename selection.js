function Selection()
{
    
    for(var i=0;i<no_of_bar-1;i++)
    {
        div_update(bar[i],arr[i],"red");//Color update

        index_min=i;

        for(var j=i+1;j<no_of_bar;j++)
        {
            div_update(bar[j],arr[j],"blue");//Color update

            if(arr[j]<arr[index_min])
            {
                if(index_min!=i)
                {
                    div_update(bar[index_min],arr[index_min],"yellow");//Color update
                }
                index_min=j;
                div_update(bar[index_min],arr[index_min],"red");//Color update
            }
            else
            {
                div_update(bar[j],arr[j],"yellow");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=arr[index_min];
            arr[index_min]=arr[i];
            arr[i]=temp;

            div_update(bar[index_min],arr[index_min],"red");//Height update
            div_update(bar[i],arr[i],"red");//Height update
            div_update(bar[index_min],arr[index_min],"blue");//Color update
        }
        div_update(bar[i],arr[i],"green");//Color update
    }
    div_update(bar[i],arr[i],"green");//Color update

}