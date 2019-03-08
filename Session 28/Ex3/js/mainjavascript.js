var myArray = ['h','a','z','t','k','f','g','l'];


for(var p=0;p<8;p+=1){
var x=p;
for(var i=p;i<8;i+=1){
	if(myArray[x].charCodeAt(0)>myArray[i].charCodeAt(0)){
		x=i;
	}
}
var temp = myArray[p];
myArray[p]=myArray[x];
myArray[x]=temp;
}
document.write(myArray);
