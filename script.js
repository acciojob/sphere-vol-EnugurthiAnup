
function volume_sphere() {
let r = document.getElementById('radius').value
let v = document.getElementById('volume')
	r = parseFloat(r);
    //Write your code here
	let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
	
	 v.value = volume.toFixed(4)
  return false;
} 

window.onload = function () {
	 document.getElementById('MyForm').onsubmit = volume_sphere;
} 
