import { colorGenerator } from "./colorGenerator"
import { colorSelector } from "./colorSelector"
import { handleGameMode } from "./handleGameMode"
import { reset } from "./reset"

// starts game; base game cycle

export const gameCycle = (): void => {
    reset()
    colorGenerator()
    colorSelector()
    handleGameMode()
}