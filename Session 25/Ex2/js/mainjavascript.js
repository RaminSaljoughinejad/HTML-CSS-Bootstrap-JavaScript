﻿/// برنامه ای بنویسید که تمامی اعداد مضرب 3 بین 0 تا 100 را چاپ کند

var x=0;

while(x<=100){
	if(!(x%3)){
		document.write(x,"</br>");
	}
	x+=1;
}

