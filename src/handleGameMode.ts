import { handleClasses } from "./handleClasses"
import { makeSqrsVisible } from "./makeSqrsVisible"
import { btnEasy, btnHard, easyMode, hardSquares } from "./globals"

export const handleGameMode = (): void => {
    if (easyMode) {
        handleClasses(btnEasy, "pressed", "add")
        handleClasses(btnHard, "pressed", "remove")
        hardSquares.forEach(sqr => handleClasses(sqr, "hidden", "add"))
    } else {
        handleClasses(btnEasy, "pressed", "remove")
        handleClasses(btnHard, "pressed", "add")
        hardSquares.forEach(sqr => handleClasses(sqr, "hidden", "remove"))
    }

    makeSqrsVisible()
}