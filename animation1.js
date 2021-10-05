var bal=setInterval(move,10);
pos=0;
function move()
{
    if(pos==-800)
    {
        pos=0;
    }
    pos--;
    var bal=document.getElementById("anim");
    bal.style.marginTop=pos+'px';
    bal.style.marginRight=pos+'px';
}