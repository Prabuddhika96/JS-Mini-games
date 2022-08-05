function myFunction(){
    var x = document.getElementById("season").value;

    var se=new Array(4);

    for(var i=0;i<4;i++){
        se[i]=new Array(4);
    }

    se[0]=["Address hardscaping issues first.","Test your garden soil.","Divide perennials and transplant shrubs."];
    se[1]=["Make a bird house.","Save the bees.","Repairing backyard ponds."];
    se[2]=["Leveling or Terracing.","Direct Drainage.","Soil Percolation Perfecting."];
    se[3]=["Create a Windowsill Garden.","Decorate your Pots.","Grow Your Own Indoor Salad Garden."];

    document.getElementById('activities').innerHTML="";
    var img_array=["spring","summer","autumn","winter"];

    var image = document.createElement("IMG");
    image.setAttribute("src", "img/"+img_array[x]+".jpg");

    document.querySelector('#activities').appendChild(image);

    var div = document.createElement("div");
    
    for(var i=0;i<se[x].length;i++){
        
        var p=document.createElement('p');
        var pnode=document.createTextNode((i+1)+". "+se[x][i]);       
    
        p.appendChild(pnode);
    
        div.appendChild(p);
    }
    document.querySelector('#activities').appendChild(div);
}