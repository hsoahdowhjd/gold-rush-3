class Menu {
     constructor() {
          this.bg = createElement("body")
          this.bg.style("backgroundcolor", "#C99A19")
          this.start = createButton("start")
          this.tittle = createElement("h1")
          this.name = createInput("").attribute("placeholder", "Enter your name")
     }
     setElementPosition() {
          this.tittle.position(width / 2, 300)
          this.start.position(width / 2, 400)
          this.name.position(width / 2, 350)
     }
     handelMousePressed() {
          this.start.mousePressed(() => {
               if (this.name.value() !== undefined) {
                    plname = this.name.value()
                    console.log(plname)
               } else {
                    plname = "player"
                    console.log(plname)
               }
               gameState = 1
          })
     }
     display() {
          this.setElementPosition();
          this.handelMousePressed();
     }
}