import { btnEasy, btnHard, easyMode } from "./variables"

// toggles the buttons' styles based on the difficulty selected

export const toggleBtnColor = (): void => {
    if (easyMode) {
        btnEasy.classList.add("pressed")
        btnHard.classList.remove("pressed")
    } else {
        btnEasy.classList.remove("pressed")
        btnHard.classList.add("pressed")
    }
}