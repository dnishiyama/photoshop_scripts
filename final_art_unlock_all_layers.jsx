function selectAllLayers(layer) {
	if(layer == undefined) layer = 0;
	activeDocument.activeLayer = activeDocument.layers[activeDocument.layers.length-1];
	var BL = activeDocument.activeLayer.name;
	activeDocument.activeLayer = activeDocument.layers[layer];
	var desc5 = new ActionDescriptor();
	var ref3 = new ActionReference();
	ref3.putName( charIDToTypeID('Lyr '), BL);
	desc5.putReference( charIDToTypeID('null'), ref3 );
	desc5.putEnumerated( stringIDToTypeID('selectionModifier'), stringIDToTypeID('selectionModifierType'), stringIDToTypeID('addToSelectionContinuous') );
	desc5.putBoolean( charIDToTypeID('MkVs'), false );
	executeAction( charIDToTypeID('slct'), desc5, DialogModes.NO );
};

function main () {
	selectAllLayers()
	app.activeDocument.activeLayer.allLocked = false;
}

main();

