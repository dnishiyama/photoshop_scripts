function test(){

  function getPartialNamedItems(nameStr){

    var doc = app.activeDocument;
		var thisItem;
		var arr = [];

    for(var i=0; i<doc.artLayers.length; i++){
      thisItem = doc.artLayers[i];

      if(thisItem.name.match(nameStr)){
        arr.push(thisItem);
      }
    };

    return arr;
  }

  var allItems = getPartialNamedItems ("Scanned");

	activeDocument.activeLayer = allItems.pop();
  //alert(allItems.length);

};

test();
