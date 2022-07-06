import { checkColorBrightness } from "./checkColorBrightness"
import { display } from "./variables"

// for better readability, changes the display's text color based on it's background color (Reference - W3C: https://www.w3.org/TR/AERT/#color-contrast)

export const setDisplayTextColor = (): void => {
    if (checkColorBrightness()) {
        display.style.color = "black"
    }
}