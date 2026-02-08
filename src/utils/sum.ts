export function sum (...numbers: number[]): number {
    return numbers.reduce((sum, addend) => sum + addend, 0);
}