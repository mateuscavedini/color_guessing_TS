import { checkColorBrightness } from "./checkColorBrightness"
import { setTextColor } from "./setTextColor"
import { display } from "./globals"

// for better readability, changes the display's text color based on it's background color (Reference - W3C: https://www.w3.org/TR/AERT/#color-contrast)

export const setDisplayTextColor = (): void => {
    const brightnessHigherThan125: boolean = checkColorBrightness()
    
    if (brightnessHigherThan125) {
        setTextColor(display, "black")
    }
}