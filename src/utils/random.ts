import { TExNumber } from "./math.js";
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

function getRandomExNumber(min: number, max: number, type: string = "real", floatLength: number = 0): TExNumber {
    const randomNumber: number = getRandomNumber(min, max, type, floatLength)

    const randomExNumber: TExNumber = {
        realPart: {
            numerator: 0,
            denominator: 1
        },
        imaginaryPart: {
            numerator: 0,
            denominator: 1
        }
    }

    if (type === "real") {
        randomExNumber.realPart = {
            numerator: randomNumber,
            denominator: 1
        }
    }

    if (type === "complex") {
        randomExNumber.imaginaryPart = {
            numerator: randomNumber,
            denominator: 1
        }
    }

    return randomExNumber
}

export { getRandomNumber }