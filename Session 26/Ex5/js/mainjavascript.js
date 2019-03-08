function calcu(){
	var x = document.getElementById("fNum").value;
	var y = document.getElementById("sNum").value;
	x = parseInt(x);
	y = parseInt(y);
	document.getElementById("myDiv").innerHTML = "";
	if(x>y){
		var temp=x;
		x=y;
		y=temp;
	}else if(x==y){
		document.getElementById("myDiv").innerHTML = "There is no number";
	}
	while(x<y){
		if(!(x%2)){
			document.getElementById("myDiv").innerHTML += x + " ";
		}
		x+=1;
	}
}
