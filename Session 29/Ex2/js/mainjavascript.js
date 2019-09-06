var myDate = new Date();
var desDay = 13;
var desMonth = 7;
var desYear = 2005;

var difDay = desDay - myDate.getDate();
var difMonth = desMonth - myDate.getMonth();
var difYear = desYear - myDate.getFullYear();
var difFull = "Years : " + difYear + " Months : " + difMonth + " Days : " + difDay;
function nowt(){	
	document.getElementById('myDiv').innerHTML = difFull;
}