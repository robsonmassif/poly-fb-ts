
@component("pixel-grid")
class PixelGrid extends polymer.Base {

  @property({type: Array, value: () => []})
  arg: {R: number, G: number, B: number};

  @property({type: String, value: "default"})
  str: string;

  ready() {
    console.log("pixel-grid ready!", this.arg, this.str);
  }
}

PixelGrid.register();