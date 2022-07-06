import { handleClasses } from "./handleClasses"
import { setBgColor } from "./setBgColor"
import { setText } from "./setText"
import { setTextColor } from "./setTextColor"
import { setIsOver, display, result, btnNew } from "./variables"

// resets game; default values

export const reset = (): void => {
    setIsOver(false)
    setBgColor(display, "transparent")
    setTextColor(display, "white")
    handleClasses(result, "hidden", "add")
    setText(result, "TRY AGAIN")
    setText(btnNew, "NEW COLOR")
}