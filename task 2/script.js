var shapes=['circle','square','ellipse','rectangle','triangle','parallelogram','trapezoid'];

var n=document.getElementsByClassName('circle');

function f(shapeno, index){
    var k=n[shapeno];
    var prev=0;
    k.addEventListener('click',function(){
        

        if(index==shapes.length){
            index=0;
            prev=6;
        }

        // k.classList.add(shapes[index]);
        k.className = k.className.replace(shapes[prev],shapes[index]);
        index+=1;
        prev=index-1;
    })
}