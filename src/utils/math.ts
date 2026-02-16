export type TRealFraction = {
    numerator: number,
    denominator: number
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

    return factors
}

function simplifyFraction(fraction: TRealFraction): TRealFraction {
    if (fraction.denominator === 0) {
        throw new Error("Делить на ноль нельзя")
    }

    const { numerator, denominator } = fraction
    const sign = Math.sign(numerator) * Math.sign(denominator)
    const num = Math.abs(numerator)
    const den = Math.abs(denominator)

    const nFactors = numberFactorization(num)
    const dFactors = numberFactorization(den)

    const n = [...nFactors]
    const d = [...dFactors]

    const minLength = Math.min(n.length, d.length)

    for (let i = 0; i < minLength; i++) {
        if (n[i] === d[i]) {
            n.splice(i, 1)
            d.splice(i, 1)
            i--
        }
        i++
    }

    const simplifiedNumerator = n.reduce((a, b) => a * b, 1)
    const simplifiedDenominator = d.reduce((a, b) => a * b, 1)

    const resultNumerator = sign < 0 ? -simplifiedNumerator : simplifiedNumerator

    return {
        numerator: resultNumerator,
        denominator: simplifiedDenominator
    }
}

function polynomialFromRoots(roots: number[], coefficient: number = 1): string {
    let coeffs: number[] = [1];
    for (const r of roots) {
        const newCoeffs: number[] = new Array(coeffs.length + 1).fill(0);
        for (let i = 0; i < coeffs.length; i++) {
            const current = coeffs[i];
            if (current === undefined) continue;
            newCoeffs[i + 1] = (newCoeffs[i + 1] || 0) + current;
            newCoeffs[i] = (newCoeffs[i] || 0) + (-r * current);
        }
        coeffs = newCoeffs;
    }
    const finalCoeffs = coeffs.map(c => c * coefficient);

    if (finalCoeffs.every(c => c === undefined || Math.abs(c) < 1e-12)) {
        return "0";
    }

    let result = "";
    let first = true;
    const highestDegree = finalCoeffs.length - 1;

    for (let degree = highestDegree; degree >= 0; degree--) {
        const coeff = finalCoeffs[degree];
        if (coeff === undefined || Math.abs(coeff) < 1e-12) continue;

        const absCoeff = Math.abs(coeff);

        const formatNumber = (value: number): string => {
            return Number.isInteger(value) ? value.toString() : value.toString();
        };

        let term: string;
        if (degree === 0) {
            term = formatNumber(absCoeff);
        } else {
            const variablePart = degree === 1 ? "x" : `x^${degree}`;
            term = absCoeff === 1 ? variablePart : formatNumber(absCoeff) + variablePart;
        }

        if (first) {
            result += (coeff < 0 ? "-" : "") + term;
            first = false;
        } else {
            result += (coeff > 0 ? "+" : "-") + term;
        }
    }

    return result;
}

export { numberFactorization, simplifyFraction, polynomialFromRoots }