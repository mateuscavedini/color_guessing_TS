// adds or removes a especific class to/from an element

export const handleClasses = (element: HTMLDivElement | HTMLParagraphElement | HTMLButtonElement, wantedClass: string, action: "add" | "remove"): void => {
    if (action === "add") {
        element.classList.add(wantedClass)
    } else {
        element.classList.remove(wantedClass)
    }
}