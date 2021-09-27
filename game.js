class Game {
    constructor() {

    }
    start() {
        startmenu = new Menu()
        startmenu.display()
    }

    play() {
        coin = createSprite(random(100, 900), random(100, 600), 40, 40)
        coin.addImage(coinimg)
        coin.scale = 0.2
        textSize(25)
        text("score = " + score, 40, 40)
        text("level = " + level, 200, 40)
        text("your name = " + plname, 200, 40)

        if (mousePressedOver(coin)) {
            score = score + 1
            console.log(score)
            coin.remove()
            coin = null
            addCoins()
        }
        if (level <= 10) {
            if (score === score2) {
                level = level + 1
                leveladd()
                console.log(level)
                time = time - 100
                score2 = score2 + 30
            }
        } else {
            window.alert("you win!!");
            gameState = 0
        }
        drawSprites();

    }
    leveladd() {
        fill("#E7D861")
        text("level up!!", 500, 350)
        textSize(100)
    }

    addCoins() {
        coin = createSprite(random(100, 900), random(100, 600), 40, 40)
        coin.addImage(coinimg)
        coin.scale = 0.2
        coin.lifetime = time
    }
}