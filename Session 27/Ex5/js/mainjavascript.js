var myArray= [2,5,6,9,8,4,6,3,1,2];
function mySearch(){
	var ch = document.getElementById("mysch").value;
    ch= parseInt(ch);
    var flag=-1;
    for(var i =0;i<myArray.length;i+=1){
        if(myArray[i]==ch){
            flag=1;
            document.getElementById("myDiv").innerHTML += i + "   ";

        }
    }
    if(flag==-1){
        document.getElementById("myDiv").innerHTML = -1;
    }
}
