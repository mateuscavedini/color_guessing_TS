import { setText } from "./setText"
import { easyMode, setSelectedRGB, squares, display } from "./variables"

// selects a random color from the generated ones

export const colorSelector = (): void => {
    // setting max index based on the difficulty (number of squares)
    const maxIndex: number = easyMode ? 2 : 5

    const selectedIndex: number = Math.round(Math.random() * maxIndex)
    const selectedColor: string = squares[selectedIndex].style.backgroundColor
    setSelectedRGB(selectedColor)

    const selectedColorText: string = selectedColor.toUpperCase()
    setText(display, selectedColorText)
}