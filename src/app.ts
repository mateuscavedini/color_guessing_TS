import { checkColorMatching } from "./checkColorMatching"
import { endGame } from "./endGame"
import { gameCycle } from "./gameCycle"
import { handleClasses } from "./handleClasses"
import { btnEasy, btnHard, btnNew, isOver, result, selectedRGB, setEasyMode, squares } from "./variables"

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

    // checks if the clicked square's background color matches with the selected color. ends game if true
    sqr.addEventListener("click", () => {
        const sqrBgColor: string = sqr.style.backgroundColor
        const colorMatches: boolean = checkColorMatching(sqrBgColor, selectedRGB)
        
        if (colorMatches) {
            handleClasses(sqr, "remove", "add")
            handleClasses(result, "hidden", "remove")
        }
        
        // if (selectedRGB !== sqr.style.backgroundColor) {
        //     handleClasses(sqr, "remove", "add")
        //     // sqr.classList.add("remove")
        //     handleClasses(result, "hidden", "remove")
        //     // result.classList.remove("hidden")
        //     return
        // }

        endGame()
    })
})