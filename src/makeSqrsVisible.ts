import { handleClasses } from "./handleClasses"
import { squares } from "./variables"

export const makeSqrsVisible = (): void => {
    squares.forEach(sqr => handleClasses(sqr, "vanishAnimation", "remove"))
}