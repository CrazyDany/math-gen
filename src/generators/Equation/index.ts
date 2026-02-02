import IProblemTemplate from "../../core/IProblemTemplate.js";
import IProblemGenerator from "../../core/IProblemGenerator.js";
import IProblemInstance from "../../core/IProblemInstance.js";

class EquaionTemplate implements IProblemTemplate {
    id: string;
    config: object;
    generator: EquationGenerator;
    constructor(config: object) {
        this.id = "equation";
        this.config = config;
        this.generator = new EquationGenerator(config);
    }
}

class EquationGenerator implements IProblemGenerator {
    generationData: object;
    constructor(generationData: object) {
        this.generationData = generationData;
    }
    generateInstance(): IProblemInstance {
        console.log(this.generationData);
        return { generatedData: this.generationData };
    }
}

export { EquaionTemplate, EquationGenerator };