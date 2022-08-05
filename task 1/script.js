var btns=document.querySelectorAll('button');

for(var i=0;i<btns.length;i++){
    btns[i].innerHTML=Math.round(Math.random()*100);
}

for(var i=0;i<btns.length;i++){
    for(var j=0;j<i;j++){
        if(btns[i].innerHTML==btns[j].innerHTML){
            btns[j].innerHTML=Math.round(Math.random()*100);
        }
    }
}

var lucky=btns[Math.round(Math.random()*4)].innerHTML;
// console.log(lucky);

function myf(n){
    var x=btns[n].innerHTML;

    var win_num=document.getElementById('win-num');
    win_num.innerHTML="Winning Number is "+lucky;
    
    var result=document.getElementById('result');

    if(x==lucky){
        var txtnode="Yee yee. Your guess is correct..";        
    }
    else{
        var txtnode="Ooops. Your guess is wrong..";    
    }


    result.innerHTML=txtnode;

    for(var i=0;i<btns.length;i++){
        btns[i].disabled = true;
    }

    var newgame = document.createElement("BUTTON");
    var t = document.createTextNode("New Game");
    newgame.appendChild(t);
    newgame.id="show-btn";
    document.getElementById('kk').appendChild(newgame);

    newgame.addEventListener('click',function(){
        refresh();
    });
}


function refresh(){
    location.reload();
}