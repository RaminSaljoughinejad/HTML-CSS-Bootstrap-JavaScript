function calcu(){
	var x = document.getElementById("fNum").value;
	var y = document.getElementById("sNum").value;
	x = parseInt(x);
	y = parseInt(y);
	var tavan=1;
	while(y){
		tavan *= x;
		y -=1;
	}
	document.getElementById("myDiv").innerHTML = tavan;
}
