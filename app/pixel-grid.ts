
@component("pixel-grid")
class PixelGrid extends polymer.Base {
  ready() {
    console.log("pixel-grid ready!");
  }
}

// after the element is defined, we register it in Polymer
PixelGrid.register();