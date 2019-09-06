var myArray = ['h','a','z','t','A','k','f','g','l','C'];  //a = 97    A=65


for(var p=0;p<myArray.length;p+=1){
var x=p;
for(var i=p;i<myArray.length;i+=1){
	if(myArray[x].charCodeAt(0)>myArray[i].charCodeAt(0)){
		x=i;
	}
}
var temp = myArray[p];
myArray[p]=myArray[x];
myArray[x]=temp;
}
document.write(myArray);
