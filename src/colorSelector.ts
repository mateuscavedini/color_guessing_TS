import { setText } from "./setText"
import { easyMode, selectedRGB, setSelectedRGB, squares, display } from "./variables"

// selects a random color from the generated ones

export const colorSelector = (): void => {
    const maxIndex: number = easyMode ? 2 : 5

    const selectedIndex: number = Math.round(Math.random() * maxIndex)
    const selectedColor: string = squares[selectedIndex].style.backgroundColor
    setSelectedRGB(selectedColor)

    const displayedColor: string = selectedRGB.toUpperCase()

    setText(display, displayedColor)
    // display.textContent = selectedRGB.toUpperCase() -> displayedColor
}