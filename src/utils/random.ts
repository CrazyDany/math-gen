import { TRealFraction } from "./math.js";

function getRandomNumber(min: number, max: number, type: string = "real", floatLength: number = 0): number {
    const n: number = Math.random() * (max - min + 1) + min

    if (type === "real") {

        if (floatLength > 0) return parseFloat(n.toFixed(floatLength))

        if (floatLength === 0) return Math.floor(n)

        throw new Error("Float length must be greater than 0 or equal to 0")
    }

    if (type === "complex") throw new Error("Not implemented")

    throw new Error("Invalid type of random number")
}

function getRandomNumbers(min: number, max: number, count: number, type: string = "real", floatLength: number = 0): number[] {
    const numbers: number[] = []

    for (let i = 0; i < count; i++) {
        numbers.push(getRandomNumber(min, max, type, floatLength))
    }

    return numbers
}

export { getRandomNumber, getRandomNumbers }