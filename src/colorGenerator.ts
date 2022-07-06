import { setBgColor } from "./setBgColor"
import { squares } from "./variables"

// generates random background colors for all squares

export const colorGenerator = (): void => {
    squares.forEach(sqr => {
        const r: number = Math.round(Math.random() * 255)
        const g: number = Math.round(Math.random() * 255)
        const b: number = Math.round(Math.random() * 255)
        const sqrBgColor: string = `rgb(${r}, ${g}, ${b})`
        
        setBgColor(sqr, sqrBgColor)
    })
}