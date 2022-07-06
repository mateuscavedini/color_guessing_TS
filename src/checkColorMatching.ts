// checks if the clicked square's background color matches the correct color (selectedRGB)

export const checkColorMatching = (sqrBgColor: string, correctColor: string): boolean => {
    if (correctColor === sqrBgColor) {
        return true
    } else {
        return false
    }
}