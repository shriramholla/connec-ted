
const fetch = require("node-fetch");
fetch('https://maps.googleapis.com/maps/api/directions/json?origin=University+of+Waterloo&destination=Lazeez+UW+Plaza&mode=&key=AIzaSyAdSLKX0_AD6D3cXs0bMqIY-n_Dw4fQ8oo')
.then(response =>{
	return response.json();
})
.then(users =>{
	var len = users.routes[0].legs[0].steps.length;
	var i;

	for(i = 0 ; i<len;i++){
		console.log((users.routes[0].legs[0].steps[i].html_instructions + '\n\n').replace(/<\/?[^>]+>/ig, ""));
	}
});
var text = ("Directions from University of Waterloo to Lazeez UW Plaza").split(" ");
var textlen = text.length;
var j = 0;
var origin = text[2];
for(j = 3; j < textlen; j++){
	if(text[j] == "to")
		break;
	else
	{
		origin += "+" + text[j];

	}
}
var dest = text[j+1];
for(var k = j + 2; k < textlen; k++){
	dest += "+" + text[k];
}
console.log(origin + "\n");
console.log(dest + "\n");
