import { handleClasses } from "./handleClasses"
import { setBgColor } from "./setBgColor"
import { setDisplayTextColor } from "./setDisplayTextColor"
import { setText } from "./setText"
import { btnNew, display, result, selectedRGB, setIsOver, squares } from "./variables"

// ends game

export const endGame = (): void => {
    // end game values
    setIsOver(true)
    setText(btnNew, "PLAY AGAIN")
    setText(result, "CORRECT!")
    handleClasses(result, "hidden", "remove")
    setBgColor(display, selectedRGB)
    
    setDisplayTextColor()

    // makes all squares visible and paints them with the correct color
    squares.forEach(sqr => {
        handleClasses(sqr, "vanish", "remove")
        setBgColor(sqr, selectedRGB)
    })
}