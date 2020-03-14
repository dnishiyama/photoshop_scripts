function saveAsFile( doc, saveFile ) {  
	psdSaveOptions = new PhotoshopSaveOptions();
  psdSaveOptions.alphaChannels = true;
	psdSaveOptions.layers = true;
  activeDocument.saveAs(saveFile, psdSaveOptions, false);
} 

// Main function to allow "return" to exit script
function main () {

	var doc = app.activeDocument;
	var docName = doc.name;

	var edittedDocName = docName.replace(/Sketch/gi, 'Final').replace(/_REV\d+/gi, ''); 

	if ( edittedDocName == docName ){
		alert('Document name is unprocessable. Could not find "Sketch" or "_REV"');
		return
	}

	var sourceDirectory = decodeURI(doc.path).match(/\/[^\/]*/gi);
	var targetDirectory = sourceDirectory.slice(0,-3).concat('/final art work files/1 - happy paws/interior batch 2 final');

	//targetDirectory = prompt("Please enter the target directory: \n\n " + targetDirectory.join(''), targetDirectory.join(''));
	targetDirectory = targetDirectory.join('');

	if (targetDirectory == null) { 
		alert('Cancelling file creation');
		return 
	}

	var newSaveName = targetDirectory + '/' + edittedDocName;

	var saveFile = new File(newSaveName);

	saveAsFile( doc, saveFile );
}

main();

