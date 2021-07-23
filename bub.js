function bub()
{
    for(var i=0;i<no_of_bar;i++)
    {
        for(var j=0;j<no_of_bar-1;j++)
        {
            bar[j].style.color="red";
            bar[j+1].style.color="red";
            if(arr[j]>arr[j+1])
            {
                bar[j].style.color="yellow";
                bar[j+1].style.color="yellow";
                swap(bar[j],bar[j+1]);
            }
            bar[j].style.color="black";
        }
        bar[j].style.color="green";
    }
    bar[j].style.color="green";
}