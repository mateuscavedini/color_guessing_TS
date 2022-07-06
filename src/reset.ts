import { setIsOver, display, result, btnNew } from "./variables"

// resets game

export const reset = (): void => {
    setIsOver(false)
    display.style.backgroundColor = "transparent"
    display.style.color = "white"
    result.classList.add("hidden")
    result.textContent = "TRY AGAIN"
    btnNew.textContent = "NEW COLOR"
}