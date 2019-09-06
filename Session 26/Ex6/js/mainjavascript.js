function calcu(){
	var x = document.getElementById("fNum").value;
    var y = document.getElementById("sNum").value;
    x = parseInt(x);
    y = parseInt(y);
    var tavan = 1;
    for(;y>0;y-=1){
        tavan*=x;
    }
    document.getElementById("myDiv").innerHTML = tavan;
}
