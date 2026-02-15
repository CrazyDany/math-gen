import IProblemTemplate from "../../core/IProblemTemplate.js";
import IProblemGenerator from "../../core/IProblemGenerator.js";
import IProblemInstance from "../../core/IProblemInstance.js";
import { getRandomNumbers } from "../../utils/random.js";

class EquaionTemplate implements IProblemTemplate {
    id: string;
    config: EquationConfig;
    default_config: EquationConfig = {
        roots_count: 2,

        roots_min_value: 0,
        roots_max_value: 10,
        roots_float_length: 0,

        coefficients_mult_min_value: 1,
        coefficients_mult_max_value: 4,
        coefficients_float_length: 0
    };
    generator: EquationGenerator;
    constructor(config?: EquationConfig) {
        this.id = "equation";
        this.config = config || this.default_config;
        this.generator = new EquationGenerator(config || this.default_config);
    }
}

interface EquationConfig {
    roots_count: number;
    roots_min_value: number;
    roots_max_value: number;
    roots_float_length: number;
    coefficients_mult_min_value: number;
    coefficients_mult_max_value: number;
    coefficients_float_length: number;
}

class EquationGenerator implements IProblemGenerator {
    generationData: EquationConfig;
    constructor(generationData: EquationConfig) {
        this.generationData = generationData;
    }
    generateInstance(): IProblemInstance {
        console.log(this.generationData)
        const roots = getRandomNumbers(this.generationData.roots_min_value, this.generationData.roots_max_value, this.generationData.roots_count, "real", this.generationData.roots_float_length);
        const coefficients_mult = getRandomNumbers(this.generationData.coefficients_mult_min_value, this.generationData.coefficients_mult_max_value, 1, "real", this.generationData.coefficients_float_length);
        const expression = (coefficients_mult) + "*" + roots.map((root: number) => `(x-${root})`).join("*") + "=0";
        return {
            name: "equation",
            variables: {
                "roots": roots
            },
            structure: {
                "legend0": "Решите уравнение:",
                "expression0": expression,
                "legend1": "В ответ укажите сумму корней уравнения"
            }
        }
    }
}

export { EquaionTemplate, EquationGenerator };