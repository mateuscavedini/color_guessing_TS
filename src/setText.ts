// sets the text of an element

export const setText = (element: HTMLDivElement | HTMLParagraphElement | HTMLButtonElement, text: string): void => {
    element.textContent = text
}