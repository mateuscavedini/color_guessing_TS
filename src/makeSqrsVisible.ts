import { handleClasses } from "./handleClasses"
import { squares } from "./globals"

export const makeSqrsVisible = (): void => {
    squares.forEach(sqr => handleClasses(sqr, "vanishAnimation", "remove"))
}