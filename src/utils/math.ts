export type TRealFraction = {
    numerator: number,
    denominator: number
}

export type TExNumber = {
    realPart: TRealFraction,
    imaginaryPart: TRealFraction
}

function numberFactorization(number: number): number[] {
    const factors: number[] = []
    let n: number = Math.abs(number)

    if (n < 2) return factors

    for (let i = 2; i <= number; i++) {
        while (number % i === 0) {
            factors.push(i)
            number /= i
        }
    }

    if (number < 0) {
        factors.push(-1)
    }

    return factors;
}

function simplifyFraction(fraction: TRealFraction): TRealFraction {
    if (fraction.denominator === 0) {
        throw new Error("Делить на ноль нельзя");
    }

    const { numerator, denominator } = fraction;
    const sign = Math.sign(numerator) * Math.sign(denominator);
    const num = Math.abs(numerator);
    const den = Math.abs(denominator);

    const nFactors = numberFactorization(num);
    const dFactors = numberFactorization(den);

    const n = [...nFactors];
    const d = [...dFactors];

    const minLength = Math.min(n.length, d.length);

    for (let i = 0; i < minLength; i++) {
        if (n[i] === d[i]) {
            n.splice(i, 1);
            d.splice(i, 1);
            i--;
        }
        i++;
    }

    const simplifiedNumerator = n.reduce((a, b) => a * b, 1);
    const simplifiedDenominator = d.reduce((a, b) => a * b, 1);

    const resultNumerator = sign < 0 ? -simplifiedNumerator : simplifiedNumerator;

    return {
        numerator: resultNumerator,
        denominator: simplifiedDenominator
    }
}

export { numberFactorization, simplifyFraction }