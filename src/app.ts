import { checkColorMatching } from "./checkColorMatching"
import { endGame } from "./endGame"
import { gameCycle } from "./gameCycle"
import { handleClasses } from "./handleClasses"
import { btnEasy, btnHard, btnNew, isOver, result, selectedRGB, setEasyMode, squares } from "./globals"

// EventListeners

// starts game on load
window.addEventListener("load", () => {
    setEasyMode(true)
    gameCycle()
})

// starts new game
btnNew.addEventListener("click", gameCycle)

// selects easy mode and starts game
btnEasy.addEventListener("click", () => {
    setEasyMode(true)
    gameCycle()
})

// selects hard mode and starts game
btnHard.addEventListener("click", () => {
    setEasyMode(false)
    gameCycle()
})

squares.forEach(sqr => {
    // disables clicking the squares if game is over
    if (isOver) {
        return
    }

    // ends game when correct color is clicked
    sqr.addEventListener("click", () => {
        const sqrBgColor: string = sqr.style.backgroundColor
        const colorMatches: boolean = checkColorMatching(sqrBgColor, selectedRGB)
        
        if (colorMatches) {
            endGame()
        } else {
            handleClasses(sqr, "vanishAnimation", "add")
            handleClasses(result, "hidden", "remove")
        }
    })
})