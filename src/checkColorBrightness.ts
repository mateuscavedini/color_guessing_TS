import { selectedRGB } from "./variables"

// checks the color brightness of the selected color, in order to choose the best readable text color

export const checkColorBrightness = (): boolean => {
    const colorArray = selectedRGB.replace(/[rgb() ]/g, "").split(",").map(Number)
    const colorBrightness = ((colorArray[0] * 299) + (colorArray[1] * 587) + (colorArray[2] * 114)) / 1000

    if (colorBrightness > 125) {
        return true
    } else {
        return false
    }
}