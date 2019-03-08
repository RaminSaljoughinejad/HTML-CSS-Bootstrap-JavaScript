var x = [0,0,0,0,0,0,0,0,0,0,0];
var howMany=0;
var myR = 0;
var i=1;
while(i<=10){
	myR= Math.floor(Math.random()*10+1);
	if(x[myR]==0){
		i++;
		x[myR]=1;
		document.write(myR,"</br>");
	}
	howMany++;
}

document.write("</br></br>",howMany);
