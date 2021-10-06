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
var can=setInterval(fly,15)
poe=0;
function fly()
{
    if(poe==-400)
    {
        poe=0;
    }
    poe--;
    var can=document.getElementById("image2");
    can.style.marginTop=poe+'px';
    can.style.marginRight=poe+'px';
}