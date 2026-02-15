import IRegister from "./core/IRegister.js";
import IProblemTemplate from "./core/IProblemTemplate.js";
import { EquaionTemplate } from "./generators/Equation/index.js";
import { numberFactorization, simplifyFraction } from "./utils/math.js";
import { getRandomNumber } from "./utils/random.js";

const register: IRegister = new IRegister();
register.addProblemTemplate(new EquaionTemplate({
    roots_count: 3,
    roots_min_value: 0,
    roots_max_value: 10,
    roots_float_length: 1,
    coefficients_mult_min_value: 1,
    coefficients_mult_max_value: 10,
    coefficients_float_length: 2
}));

const problemTemplate: IProblemTemplate = register.getProblemTemplate("equation")!;
const problemInstance = problemTemplate.generator.generateInstance();
console.log(problemInstance);