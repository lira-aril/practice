var gameStop = false 
var points = 0

document.addEventListener("DOMContentLoaded", main)

function main () {
    document.addEventListener("keydown", go)
}

function go (event) {
    let dino = document.querySelector(".gamer")
    let x = parseInt(dino.style.left)
    let y = parseInt(window.getComputedStyle(dino).top)
    let maxX = window.innerWidth
    

    if (!x) {
        x = 50
    }

    if (event.code === "ArrowRight") {
        if (x < maxX - 75) {
            dino.style.transform = "scaleX(1)";
            x += 20
        }
    } else if (event.code === "ArrowLeft") {
        if (x > 0) {
            dino.style.transform = "scaleX(-1)";
            x -= 20
        }  
    } else if (event.code === "Space") {
        dino.style.top = `${y - 100}px`
        setTimeout(() => {dino.style.top = `${y}px`
            setTimeout(() => checkStop(), 310)}, 700)
    }

    dino.style.left = `${x}px`
     // console.log(x, y)
     setTimeout(() => checkStop(), 310)
}

function checkStop() {
    let dino = document.querySelector(".gamer")
    let x = parseInt(window.getComputedStyle(dino).left)
    let y = parseInt(window.getComputedStyle(dino).top)

    let handX = 54 + x
    let handY = 69 + y 

    if (dino.style.transform === "scaleX(-1)") {
        handX = 6 + x
        handY = 69 + y
    }
    

    const cactusFirst = document.querySelector(".cactus_1")
    var coordsOne = cactusFirst.getBoundingClientRect();
    var leftTop = [coordsOne.left, coordsOne.top]
    var rightTop = [coordsOne.left + 20, coordsOne.top + 20]

    const cactusSecond = document.querySelector(".cactus_2")
    var coordsTwo = cactusSecond.getBoundingClientRect(".cactus_2")
    var leftTopTwo = [coordsTwo.left, coordsTwo.top]
    var rightTopTwo = [coordsTwo.left + 20, coordsTwo.top + 20]

    const cactusThird = document.querySelector(".cactus_2")
    var coordsThird = cactusThird.getBoundingClientRect(".cactus_2")
    var leftTopThree = [coordsThird.left, coordsThird.top]
    var rightTopTree = [coordsThird.left + 20, coordsThird.top + 20] 
    
    if (handX > leftTop[0] && handY > leftTop[1] && handX < rightTop[0] && handY < rightTop[1]) {
        setTimeout(() => {
            alert("GAME OVER!")
            gameStop = true
        }, 310)
    }

    

}