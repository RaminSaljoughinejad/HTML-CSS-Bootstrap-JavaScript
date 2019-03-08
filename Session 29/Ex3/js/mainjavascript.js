var dothis = setInterval(myTime,1000);

function myTime(){
	var myDate = new Date();
	document.getElementById('myClock').innerHTML = myDate.toLocaleTimeString();
}
