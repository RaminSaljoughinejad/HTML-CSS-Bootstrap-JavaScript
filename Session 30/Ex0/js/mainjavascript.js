var pride = {
	Model : 111,
	NumWheels : 4,
	NumDoors : 4,
	Weight : "890KG",
	AudioSystem : false,
	CurentSpeed : 0,
	ENG:false,
	maxSpeed:120,
	StartENG : function() {
		if(this.ENG){
			return "GHEZ";
		}else{
			this.ENG = true;
			return "GHAM GHAM";
		}
	},
	incSpeed : function() {
		if(this.ENG){
			if(this.maxSpeed >= this.CurentSpeed){
				return this.CurentSpeed += 10;
			}else{
				return "BOM";
			}
		}else{
			return "The car is off";
		}
	}
};

function checker(){
	document.getElementById('myDiv').innerHTML = pride.StartENG();
}
function incCarSpeed(){
	document.getElementById('myDiv').innerHTML = pride.incSpeed();
}
