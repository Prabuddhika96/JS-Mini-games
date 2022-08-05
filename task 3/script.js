document.getElementById('num-btn').addEventListener('click',function(){
    document.getElementById("error").innerHTML ="";
    var title=document.getElementById('title').value;
    var numofplayers=document.getElementById('numplayers').value;
    
    try {
        if(title==""){
            throw "Please enter the title";
        }
        if(numofplayers==""){
            throw "Please enter the number of playes";
        }
        else{
            if(isNaN(numofplayers)) {
                throw "The number of players is not a number";
            }
            else if(numofplayers<1 || numofplayers>=6){
                throw "The number of players must be between 1 and 5";
            }
        }

        document.getElementById('error').innerHTML="";
        document.getElementById('playernames').innerHTML="";

        var p=document.createElement('p');
        var pnode=document.createTextNode('Player Names');
    
        p.appendChild(pnode);
    
        document.querySelector('#playernames').appendChild(p);

        document.querySelector('.player-name-inputs').innerHTML="";

        for(var i=0;i<numofplayers;i++){
            var input=document.createElement('input');
            input.setAttribute("type", "text");
            input.className="player_name_input"
            // input.value="player "+i;
            document.querySelector('.player-name-inputs').appendChild(input);
        }

        var show_btn = document.createElement("BUTTON");
        var t = document.createTextNode("Show Scoreboard");
        show_btn.appendChild(t);
        show_btn.id="show-btn";
        document.querySelector('.player-name-inputs').appendChild(show_btn);

        show_btn.addEventListener('click',function(){
            f(numofplayers);
        });
    }
    catch(err) {
        document.getElementById("error").innerHTML = err;
    }
});







function f(numofplayers){
    var pinputs=document.getElementsByClassName('player_name_input');
    

    try {
        for(var i=0;i<pinputs.length;i++){
            if(pinputs[i].value==""){
                throw 'Player '+(i+1)+" name is missing";
            }
        }

        document.getElementById('table').innerHTML="";

        document.getElementById('card_toutnaments').innerHTML="";

        var p=document.createElement('h2');
        var pnode=document.createTextNode('Card Tournaments');
        p.appendChild(pnode);
        document.getElementById('card_toutnaments').appendChild(p);

        var table=document.createElement('table');

        var heading_tr=document.createElement('tr');
        var th1=document.createElement('th');
        var th2=document.createElement('th');
        var th3=document.createElement('th');

        var textnode1=document.createTextNode('#');
        var textnode2=document.createTextNode('Name');
        var textnode3=document.createTextNode('Score');

        th1.appendChild(textnode1);
        th2.appendChild(textnode2);
        th3.appendChild(textnode3);

        heading_tr.appendChild(th1);
        heading_tr.appendChild(th2);
        heading_tr.appendChild(th3);

        table.appendChild(heading_tr);


        for(var i=0;i<numofplayers;i++){
            var col_tr=document.createElement('tr');
            var td1=document.createElement('td');
            var td2=document.createElement('td');
            var td3=document.createElement('td');

            var textnode1=document.createTextNode(i+1);
            var textnode2=document.createTextNode(pinputs[i].value);
            var textnode3=document.createTextNode('0');

            td1.appendChild(textnode1);
            td2.appendChild(textnode2);
            td3.appendChild(textnode3);

            col_tr.appendChild(td1);
            col_tr.appendChild(td2);
            col_tr.appendChild(td3);

            table.appendChild(col_tr);
        }     

        document.getElementById('table').appendChild(table);
    }
    catch(err) {
        document.getElementById("error-player-name").innerHTML = err;
    }
}