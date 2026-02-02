type NumberType = "natural" | "integer" | "real" | "complex";

interface ExNumber {
    type: NumberType;
    stringValue: string;
}

interface Monomial {
    variable: string;
    coefficient: ExNumber;
    exponent: ExNumber;
}

interface Polynomial {
    monomials: Monomial[];
}
