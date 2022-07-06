import { colorGenerator } from "./colorGenerator"
import { colorSelector } from "./colorSelector"
import { reset } from "./reset"
import { toggleBtnColor } from "./toggleBtnColor"
import { toggleSqrVisibility } from "./toggleSqrVisibility"

// starts game

export const gameCycle = (): void => {
    reset()
    colorGenerator()
    colorSelector()
    toggleBtnColor()
    toggleSqrVisibility()
}