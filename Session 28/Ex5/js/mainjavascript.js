var preValue="0";
var myAmalGar="Null";
var myAmalVand=0;
function myChr(x){
	document.getElementById("myDiv").innerHTML += x;
	myAmalVand = parseInt(document.getElementById("myDiv").innerHTML);	
}
function myop(z){
	if(z=="+"){
		preValue = myAmalVand;
		document.getElementById("myDiv").innerHTML = "0";
		myAmalVand = 0;
		myAmalGar = z;
		
	}else{
		var newVal = parseInt(document.getElementById("myDiv").innerHTML);
		document.getElementById("myDiv").innerHTML = preValue + newVal; 
	}
}
