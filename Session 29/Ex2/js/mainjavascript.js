var myDate = new Date();
var desDay = 11;
var desMonth = 0;
var desYear = 2019;

var difDay = desDay - myDate.getDate();
var difMonth = desMonth - myDate.getMonth();
var difYear = desYear - myDate.getFullYear();
var difFull = "Years : " + difYear + " Months : " + difMonth + " Days : " + difDay;
function nowt(){	
	document.getElementById('myDiv').innerHTML = difFull;
}