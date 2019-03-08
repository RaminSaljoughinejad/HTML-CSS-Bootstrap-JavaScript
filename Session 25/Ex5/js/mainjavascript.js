/// برنامه ای بنویسید که یک عدد از ورودی دریافت سری فیبوناتچی ان را چاپ کند

function myfunction(){
	var x= document.getElementById("myNum").value;
	
	var i=1,j=1;
	document.write("1+1+");
	x-=2;
	var z=1;
	while(z<=x){
		var temp=i+j;
		i=j;
		j=temp;
		document.write(j,"+");
		z+=1;
	}
}

