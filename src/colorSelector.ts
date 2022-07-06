import { easyMode, selectedRGB, setSelectedRGB, squares, display } from "./variables"

// selects a random color from the generated ones

export const colorSelector = (): void => {
    const maxIndex = easyMode ? 2 : 5

    const selectedIndex = Math.round(Math.random() * maxIndex)
    setSelectedRGB(squares[selectedIndex].style.backgroundColor)

    display.textContent = selectedRGB.toUpperCase()
}