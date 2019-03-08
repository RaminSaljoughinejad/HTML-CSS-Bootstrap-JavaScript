var myArray= [2,5,6,9,8,4,6,3,1,2];
function mySearch(){
	var co = -1;
	var x = document.getElementById('mysch').value;
	for(var i=0;i<myArray.length;i+=1){
		if(myArray[i]==x){
			co = i;
			i = myArray.length;
		}else{
			document.getElementById('myDiv').innerHTML = -1;
		}
	}
	if(co!=-1){
		document.getElementById('myDiv').innerHTML = co;
	}else{
		document.getElementById('myDiv').innerHTML = -1;
	}
}
