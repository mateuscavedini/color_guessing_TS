import { handleClasses } from "./handleClasses"
import { setBgColor } from "./setBgColor"
import { setDisplayTextColor } from "./setDisplayTextColor"
import { setText } from "./setText"
import { btnNew, display, result, selectedRGB, setIsOver, squares } from "./variables"

// ends game

export const endGame = (): void => {
    setIsOver(true)
    setText(btnNew, "PLAY AGAIN")
    // btnNew.textContent = "PLAY AGAIN"
    setText(result, "CORRECT!")
    // result.textContent = "CORRECT!"
    handleClasses(result, "hidden", "remove")
    // result.classList.remove("hidden")
    setBgColor(display, selectedRGB)
    // display.style.backgroundColor = selectedRGB
    
    setDisplayTextColor()

    squares.forEach(sqr => {
        handleClasses(sqr, "remove", "remove")
        // sqr.classList.remove("remove")
        setBgColor(sqr, selectedRGB)
        // sqr.style.backgroundColor = selectedRGB
    })
}