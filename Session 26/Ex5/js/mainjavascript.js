function calcu(){
	var x = document.getElementById("fNum").value;
	var y = document.getElementById("sNum").value;
	x = parseInt(x);
	y = parseInt(y);
    var min=0;
    var max=0;
	if( x==null && y==null){
        document.write("You need to fill in both inputs.");
    }else{
        if(x>y){
            max = x;
            min = y+1;
        }else{
            max = y;
            min = x+1;
        }
        for(;min<max;min+=1){
            if(!(min%2)){
                document.write(min,"<br>");
            }
        }
    }
}
