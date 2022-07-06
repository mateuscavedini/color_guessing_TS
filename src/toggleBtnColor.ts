import { handleClasses } from "./handleClasses"
import { btnEasy, btnHard, easyMode } from "./variables"

// toggles the buttons' styles based on the difficulty selected

export const toggleBtnColor = (): void => {
    if (easyMode) {
        handleClasses(btnEasy, "pressed", "add")
        handleClasses(btnHard, "pressed", "remove")
    } else {
        handleClasses(btnEasy, "pressed", "remove")
        handleClasses(btnHard, "pressed", "add")
    }
}