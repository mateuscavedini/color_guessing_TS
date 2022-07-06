import { easyMode, hardSquares, squares } from "./variables"

// makes all squares visibles and toggles the hard squares' visibility based on the difficulty selected

export const toggleSqrVisibility = (): void => {
    squares.forEach(sqr => sqr.classList.remove("remove"))

    hardSquares.forEach(sqr => easyMode ? sqr.classList.add("hidden") : sqr.classList.remove("hidden"))
}