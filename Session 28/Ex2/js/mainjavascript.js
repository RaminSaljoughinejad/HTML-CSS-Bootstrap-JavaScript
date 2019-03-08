var myArray = [2,9,1,6,5,4,3,7];
document.write(myArray,"</br></br>");

for(var p=0;p<8;p+=1){
var x=p;
for(var z=p;z<8;z+=1){
	if(myArray[z]<myArray[x]){
		x=z;
	}
}
var temp=myArray[p];
myArray[p]=myArray[x];
myArray[x]=temp;
}

document.write(myArray,"</br></br>");