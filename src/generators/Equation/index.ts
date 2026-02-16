import { BaseProblemTemplate } from "../../core/BaseProblemTemplate.js";
import IProblemGenerator from "../../core/IProblemGenerator.js";
import IProblemInstance from "../../core/IProblemInstance.js";
import IProblemStructure from "../../core/IProblemStructure.js";
import { TProblemPart } from '../../core/IProblemStructure.js';
import { polynomialFromRoots } from "../../utils/math.js";
import { getRandomNumbers } from "../../utils/random.js";
import { getRandomNumber } from "../../utils/random.js";

type EquationConfig = {
    roots_count: number,
    roots_min_value: number,
    roots_max_value: number,
    roots_float_length: number,
    coefficients_mult_min_value: number,
    coefficients_mult_max_value: number,
    coefficients_float_length: number
}

class EquationInstance implements IProblemInstance {
    name: string;
    variables: object;
    structure: EquationStructure;
    constructor() {
        this.name = "Equation"
        this.variables = {}
        this.structure = new EquationStructure()
    }
}

class EquationStructure implements IProblemStructure {
    parts: TProblemPart[]

    constructor() {
        this.parts = [
            {
                type: "legend",
                content: "Решите уравнение"
            },
            {
                type: "expression",
                content: ""
            }
        ]
    }
}

class EquationGenerator implements IProblemGenerator<EquationConfig> {
    generationData: EquationConfig;
    generateInstance(): EquationInstance {
        const instance = new EquationInstance()

        const rootsCount = this.generationData.roots_count
        const minRoot = this.generationData.roots_min_value
        const maxRoot = this.generationData.roots_max_value
        const rootsFloatLength = this.generationData.roots_float_length
        const minCoefficientsMult = this.generationData.coefficients_mult_min_value
        const maxCoefficientsMult = this.generationData.coefficients_mult_max_value
        const coefficientsFloatLength = this.generationData.coefficients_float_length

        const roots: number[] = getRandomNumbers(minRoot, maxRoot, rootsCount, "real", rootsFloatLength)
        const mult: number = getRandomNumber(minCoefficientsMult, maxCoefficientsMult, "real", coefficientsFloatLength)

        const equationString = polynomialFromRoots(roots, mult || 1) + "=0"
        instance.structure.parts[1]!.content = equationString
        return instance
    }

    constructor(config: EquationConfig) {
        this.generationData = config
    }
}

class EquationTemplate extends BaseProblemTemplate<EquationConfig> {
    getDefaultConfig(): EquationConfig {
        return {
            roots_count: 2,
            roots_min_value: 0,
            roots_max_value: 10,
            roots_float_length: 0,
            coefficients_mult_min_value: 1,
            coefficients_mult_max_value: 10,
            coefficients_float_length: 0
        }
    }

    createGenerator(config: EquationConfig): IProblemGenerator<EquationConfig> {
        return new EquationGenerator(config)
    }

    constructor(id: string, customConfig?: Partial<EquationConfig>) {
        super(id, customConfig)
    }
}

export { EquationTemplate };