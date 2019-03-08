/// برنامه ای بنویسید که 2 عدد از وزودی دریافت عدد اول را به توان عدد دوم برساند


function calcu(){
	//  شروع دریافت ورودی از کاربر
	var x = document.getElementById("fnum").value;
	var y = document.getElementById("snum").value;
	// پایان دریافت ورودی از کاربر
	
	//  شروع انجام محاسبات
	var z=1;
	var mul=1;
	while(z<=y){
		mul*=x;
		z+=1;
	}
	//  پایان انجام محاسبات
	
	// چاپ خروجی
	document.getElementById("rdiv").innerHTML = mul;
	
}
