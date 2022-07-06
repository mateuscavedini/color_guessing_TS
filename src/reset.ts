import { handleClasses } from "./handleClasses"
import { setBgColor } from "./setBgColor"
import { setText } from "./setText"
import { setTextColor } from "./setTextColor"
import { setIsOver, display, result, btnNew } from "./variables"

// resets game

export const reset = (): void => {
    setIsOver(false)
    setBgColor(display, "transparent")
    // display.style.backgroundColor = "transparent"
    setTextColor(display, "white")
    // display.style.color = "white"
    handleClasses(result, "hidden", "add")
    // result.classList.add("hidden")
    setText(result, "TRY AGAIN")
    // result.textContent = "TRY AGAIN"
    setText(btnNew, "NEW COLOR")
    // btnNew.textContent = "NEW COLOR"
}