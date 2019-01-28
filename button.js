var b=document.createElement('button');
b.id='btn';
var i=0;
b.innerHTML=i;
document.body.appendChild(b);
b.onclick=function(){
    i++;
    b.innerHTML=i;   
}
