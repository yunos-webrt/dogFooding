
yunosApiPlugin.system.get("OutputDevices", 
 function(devices) { 
 	var dpiw = devices.displayDevices[0].dotsPerInchW;
 	console.log('DPI W:' + dpiw);
 	if(dpiw > 150){
 		document.body.style.zoom='120%';
 		console.log('zoom the page 120%');
 	}
});