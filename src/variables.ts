// all global variables

export const btnNew = document.getElementById("new-color") as HTMLButtonElement
export const btnEasy = document.getElementById("easy") as HTMLButtonElement
export const btnHard = document.getElementById("hard") as HTMLButtonElement

export const display = document.getElementById("display") as HTMLDivElement
export const squares = document.querySelectorAll(".square") as NodeListOf<HTMLDivElement>
export const hardSquares = document.querySelectorAll(".hard") as NodeListOf<HTMLDivElement>
export const result = document.getElementById("result") as HTMLParagraphElement

export let selectedRGB: string
export const setSelectedRGB = (value: string): void => { // selectedRGB setter
    selectedRGB = value
}

export let easyMode: boolean = true
export const setEasyMode = (value: boolean): void => { // easyMode setter
    easyMode = value
}

export let isOver: boolean = false
export const setIsOver = (value: boolean): void => { // isOver setter
    isOver = value
}