import { squares } from "./variables"

// generates random colors for all squares

export const colorGenerator = (): void => {
    squares.forEach(sqr => {
        const r = Math.round(Math.random() * 255)
        const g = Math.round(Math.random() * 255)
        const b = Math.round(Math.random() * 255)
        sqr.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
}