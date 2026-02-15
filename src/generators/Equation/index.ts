import { BaseProblemTemplate } from "../../core/BaseProblemTemplate.js";
import IProblemGenerator from "../../core/IProblemGenerator.js";
import IProblemInstance from "../../core/IProblemInstance.js";
import IProblemStructure from "../../core/IProblemStructure.js";

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
    parts: Array<{ key: string, type: string, content: any }>

    constructor() {
        this.parts = [
            { key: "task", type: "legend", content: ["Решите уравнение"] },
            { key: "equation", type: "expression", content: [] }
        ]
    }
}

class EquationGenerator implements IProblemGenerator<EquationConfig> {
    generationData: EquationConfig;
    generateInstance(): EquationInstance {
        throw new Error("Not implemented")
    }

    constructor(config: EquationConfig) {
        this.generationData = config
    }
}

class EquationTemplate extends BaseProblemTemplate<EquationConfig> {
    getDefaultConfig(): EquationConfig {
        return {
            roots_count: 3,
            roots_min_value: 0,
            roots_max_value: 10,
            roots_float_length: 1,
            coefficients_mult_min_value: 1,
            coefficients_mult_max_value: 10,
            coefficients_float_length: 2
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