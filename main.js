eventTarget.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 192) {
        console.log("teer")
      return;
    }
    // do something
  });
 events.Event.addListener = function(event) {
    if (event.keyCode == 192) {
        console.log("function triggered")
       highlightSelection()
    }
 }
 function myFunction(event) {
    var x = event.keyCode;
    if (x == 27) {  // 27 is the ESC key
      alert ("You pressed the Escape key!");
    }
  }
function highlightSelection() {
    var userSelection = window.getSelection();
    console.log(userSelection) // get selected text 
    for(var i = 0; i < userSelection.rangeCount; i++) {
        highlightRange(userSelection.getRangeAt(i));
    }


}
console.log("test")
browser.commands.onCommand.addListener(function(command) {
    if (command == "toggle-feature") {
      console.log("toggling the feature!");
    }
    //test
  });
