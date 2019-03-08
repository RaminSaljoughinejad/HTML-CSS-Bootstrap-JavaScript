function lengthChecker(){
	val1 = document.getElementById('val1').value;
	val2 = document.getElementById('val2').value;
	if(val1!=val2){
		document.getElementById('errorBox').innerHTML = "<p style='color:red'>Not The Same</p>";
	}else{
		document.getElementById('errorBox').innerHTML = "<p style='color:green'>Same</p>";
	}	
}
