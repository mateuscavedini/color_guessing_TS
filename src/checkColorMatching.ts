export const checkColorMatching = (sqrBgColor: string, correctColor: string): boolean => {
    if (correctColor === sqrBgColor) {
        return true
    } else {
        return false
    }
}