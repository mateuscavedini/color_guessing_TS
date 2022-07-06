import { setDisplayTextColor } from "./setDisplayTextColor"
import { btnNew, display, result, selectedRGB, setIsOver, squares } from "./variables"

// ends game

export const endGame = (): void => {
    setIsOver(true)
    btnNew.textContent = "PLAY AGAIN"
    result.textContent = "CORRECT!"
    result.classList.remove("hidden")
    display.style.backgroundColor = selectedRGB
    
    setDisplayTextColor()

    squares.forEach(sqr => {
        sqr.classList.remove("remove")
        sqr.style.backgroundColor = selectedRGB
    })
}