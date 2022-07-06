import { handleClasses } from "./handleClasses"
import { btnEasy, btnHard, easyMode } from "./variables"

// toggles the buttons' styles based on the difficulty selected

export const toggleBtnColor = (): void => {
    if (easyMode) {
        handleClasses(btnEasy, "pressed", "add")
        // btnEasy.classList.add("pressed")
        handleClasses(btnHard, "pressed", "remove")
        // btnHard.classList.remove("pressed")
    } else {
        handleClasses(btnEasy, "pressed", "remove")
        // btnEasy.classList.remove("pressed")
        handleClasses(btnHard, "pressed", "add")
        // btnHard.classList.add("pressed")
    }
}