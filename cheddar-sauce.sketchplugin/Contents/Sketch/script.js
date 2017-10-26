function onRun(context) {

  // Fetching the root API object
  var sketch = context.api()
  sketch.log("Sketch version is " + sketch.version)
  sketch.log("Sketch API version is " + sketch.api_version)

  // Finding the image in the resource folder
  var imageURL = sketch.resourceNamed('swag.jpg')

  // Targeting the current Sketch page
  var document = sketch.selectedDocument
  var page = document.selectedPage

  // Creating a new group containing a new image layer
  var group = page.newGroup({frame: new sketch.Rectangle(0, 0, 200, 200)})

  // Importing the image into the new group
  var image = group.newImage({frame : new sketch.Rectangle(50, 50, 100, 100) imageURL:imageURL})
}
