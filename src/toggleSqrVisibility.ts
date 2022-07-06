import { handleClasses } from "./handleClasses"
import { easyMode, hardSquares, squares } from "./variables"

// makes all squares visibles and toggles the hard squares' visibility based on the difficulty selected

export const toggleSqrVisibility = (): void => {
    squares.forEach(sqr => handleClasses(sqr, "vanish", "remove"))

    hardSquares.forEach(sqr => easyMode ? handleClasses(sqr, "hidden", "add") : handleClasses(sqr, "hidden", "remove"))
}