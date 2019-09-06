/// برنامه ای بنویسید که یک عدد از ورودی دریافت سری فیبوناتچی ان را چاپ کند

function myfunction(){
	var x= document.getElementById("myNum").value;
	if(x==1){
        document.write(1);
    }else if(x<1){
        document.write("You can not enter numbers lower than 1,");
        
    }else{
        var pre = 1;
        var cur = 1;
        var next=0
        document.write("1+1");
        x-=2;
        while(x>0){
            next = pre+cur;
            pre= cur;
            cur=next;
            document.write("+",cur);
            x-=1;
        } 
    }
	
}

