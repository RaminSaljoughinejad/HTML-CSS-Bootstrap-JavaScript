var iPhoneX = {
	type : "Mobile Phone",
	model : "Apple iPhone",
	color : "Gold",
	Storage : "256 GB",
	Carrier : "AT&T",
	SerialNumber : "95B548I23LLA",
	IOSVer : "11.4.1",
	BlueTooth : true,
	FingerPrint : false,
	FaceID : true,
	summary : function() {
		return "Type: " + this.type + "</br> Model: " + this.model + "</br> Color: " + this.color;
	},
	ShortSummary : function() {
		return "Type: " + this.type + "</br> Model: " + this.model + "</br> Color: " + this.color + "</br> Version: " + this.IOSVer + "</br> Bluetooth: " + this.BlueTooth + "</br> FaceID: " + this.FaceID;
	}
};

function FullSummary() {
	document.getElementById('details').innerHTML = iPhoneX.summary();
}

function ShortSummary() {
	document.getElementById('details').innerHTML = iPhoneX.ShortSummary();
}
