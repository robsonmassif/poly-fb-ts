
@component("pixel-grid")
class PixelGrid extends polymer.Base {

  @property({type: Array, value: () => []})
  arg: {R: number, G: number, B: number};

  ready() {
    console.log("pixel-grid ready!", this.arg);
  }

}

PixelGrid.register();